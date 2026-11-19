const THANKS_PATH = "/free-templates/thanks/";
const FORM_PATH = "/free-templates/";
const MAILERLITE_URL = "https://connect.mailerlite.com/api/subscribers";

function redirect(location) {
  return new Response(null, {
    status: 303,
    headers: { Location: location },
  });
}

function isValidEmail(value) {
  if (typeof value !== "string") return false;
  const email = value.trim();
  if (email.length < 3 || email.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function cleanName(value) {
  if (typeof value !== "string") return "";
  return value.replace(/[\r\n\t]/g, " ").trim().slice(0, 100);
}

function siteOrigin() {
  return process.env.DEPLOY_PRIME_URL || process.env.URL || "";
}

async function saveToNetlifyForms(email, firstName) {
  const origin = siteOrigin();
  if (!origin) {
    console.error("Netlify Forms fallback skipped: URL is not set.");
    return;
  }

  const body = new URLSearchParams({
    "form-name": "free-templates",
    email,
  });
  if (firstName) body.set("first-name", firstName);

  const response = await fetch(`${origin.replace(/\/$/, "")}/`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    signal: AbortSignal.timeout(8000),
  });

  if (!response.ok) {
    console.error(`Netlify Forms fallback failed with status ${response.status}.`);
  }
}

async function subscribeToMailerLite(email, firstName) {
  const apiKey = process.env.MAILERLITE_API_KEY;
  const groupId = process.env.MAILERLITE_GROUP_ID;
  if (!apiKey || !groupId) {
    console.error("MailerLite skipped: MAILERLITE_API_KEY or MAILERLITE_GROUP_ID is not set.");
    return;
  }

  const payload = {
    email,
    groups: [groupId],
  };
  if (firstName) payload.fields = { name: firstName };

  const response = await fetch(MAILERLITE_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(8000),
  });

  if (response.status === 200 || response.status === 201) return;

  const detail = (await response.text()).replaceAll(apiKey, "[redacted]").slice(0, 500);
  console.error(`MailerLite subscribe failed with status ${response.status}: ${detail}`);
}

export default async (request) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  let params;
  try {
    params = new URLSearchParams(await request.text());
  } catch (error) {
    console.error("Could not read the signup form body.", error);
    return redirect(`${FORM_PATH}?error=email`);
  }

  if ((params.get("bot-field") || "").trim()) {
    return redirect(THANKS_PATH);
  }

  const email = (params.get("email") || "").trim().toLowerCase();
  const firstName = cleanName(params.get("first-name") || "");
  if (!isValidEmail(email)) {
    return redirect(`${FORM_PATH}?error=email`);
  }

  try {
    await saveToNetlifyForms(email, firstName);
  } catch (error) {
    console.error("Netlify Forms fallback threw.", error);
  }

  try {
    await subscribeToMailerLite(email, firstName);
  } catch (error) {
    console.error("MailerLite subscribe threw.", error);
  }

  return redirect(THANKS_PATH);
};
