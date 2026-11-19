import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { rehypeMidCta } from "./src/lib/rehype-mid-cta.mjs";

export default defineConfig({
  site: "https://summitledgerbooks.com",
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/free-templates/thanks"),
    }),
  ],
  markdown: {
    rehypePlugins: [rehypeMidCta],
  },
});
