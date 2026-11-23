import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().max(60).optional(),
    description: z.string(),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    ogImage: z.string().optional(),
    midCta: z
      .object({
        after: z.string(),
        text: z.string(),
      })
      .optional(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().max(60).optional(),
    description: z.string(),
    shortDescription: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    relatedPosts: z.array(z.string()).default([]),
    order: z.number(),
  }),
});

export const collections = { blog, services };
