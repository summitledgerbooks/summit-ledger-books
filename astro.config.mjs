import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { rehypeMidCta } from "./src/lib/rehype-mid-cta.mjs";

function blogLastmods() {
  const dir = join(process.cwd(), "src/content/blog");
  const map = new Map();
  for (const file of readdirSync(dir)) {
    if (!file.endsWith(".md")) continue;
    const raw = readFileSync(join(dir, file), "utf8");
    const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? "";
    if (/^draft:\s*true\s*$/m.test(fm)) continue;
    const updated = fm.match(/^updatedDate:\s*["']?(\d{4}-\d{2}-\d{2})/m)?.[1];
    const date = fm.match(/^date:\s*["']?(\d{4}-\d{2}-\d{2})/m)?.[1];
    const value = updated || date;
    if (value) map.set(file.replace(/\.md$/, ""), value);
  }
  return map;
}

const postLastmods = blogLastmods();
const buildDate = new Date().toISOString().slice(0, 10);

export default defineConfig({
  site: "https://summitledgerbooks.com",
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/free-templates/thanks"),
      serialize(item) {
        const match = item.url.match(/\/blog\/([^/]+)\/?$/);
        const postDate = match ? postLastmods.get(match[1]) : undefined;
        item.lastmod = postDate ?? buildDate;
        return item;
      },
    }),
  ],
  markdown: {
    rehypePlugins: [rehypeMidCta],
  },
});
