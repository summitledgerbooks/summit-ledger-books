# MailerLite signup for free templates

The form at `/free-templates/` posts to the Netlify Function `subscribe`. A valid signup is stored in Netlify Forms, and when MailerLite is configured the same person is added to the **Free Templates** group. The visitor is then sent to `/free-templates/thanks/` to download the zip. That download does not wait on MailerLite.

## Set the environment variables in Netlify

1. Open the site in Netlify.
2. Go to **Site configuration → Environment variables**.
3. Add these two variables for the Production context (add them to Deploy Previews too if those deploys should subscribe people):
   - `MAILERLITE_API_KEY` — an API token from MailerLite (**Integrations → MailerLite API**).
   - `MAILERLITE_GROUP_ID` — the id of the group named **Free Templates**.
4. Save, then redeploy. A function only sees variables that were present when that deploy was published.

Do not commit either value. `.env.example` lists the names only.

## Create the group

In MailerLite, open **Subscribers → Groups** and create a group named **Free Templates**.

## Find the group ID

Open that group. The id is the long number in the page URL.

You can also list groups with the API:

```bash
curl https://connect.mailerlite.com/api/groups \
  -H "Authorization: Bearer $MAILERLITE_API_KEY" \
  -H "Accept: application/json"
```

Use the `id` of the group whose name is `Free Templates`.

## What the function sends

When both variables are set, the function calls:

`POST https://connect.mailerlite.com/api/subscribers`

```json
{
  "email": "person@example.com",
  "fields": { "name": "Ada" },
  "groups": ["GROUP_ID"]
}
```

`fields` is omitted when no first name was entered. `name` is MailerLite's default first-name field. A new subscriber returns 201. An existing subscriber is updated and returns 200, which this function treats as success. `Authorization` is `Bearer` plus the API token. The token stays in Netlify's environment and is never sent to the browser.

## Before the MailerLite account exists

If either variable is missing, the function skips MailerLite, writes a line to the function log, still stores the signup in Netlify Forms, and redirects to the download page. A MailerLite error, including a timeout, is logged the same way and does not block the download.

Netlify Forms is registered by a hidden `free-templates` form in the built page. After the email passes the server check, the function posts that submission to the site so Netlify stores it even though the visible form posts to the function.

A filled honeypot (`bot-field`) is ignored: no MailerLite call and no Forms entry. An invalid email is sent back to `/free-templates/?error=email` and is not stored.

## Test

1. Deploy the site.
2. Submit a real email at `/free-templates/`. You should land on `/free-templates/thanks/` and the zip link should download.
3. In Netlify, open **Forms → free-templates** and confirm the submission is there.
4. After both environment variables are set and you redeploy, submit again. The address should appear in the **Free Templates** group. Submitting that same email again should still reach the thanks page.
5. Submit with the hidden `bot-field` filled in. Nothing should be stored.
6. Submit `not-an-email`. The form should show an error, and nothing should be stored.

Function logs are under the deploy's **Functions** tab, in `subscribe`.
