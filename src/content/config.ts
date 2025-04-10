import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

function removeDupsAndLowerCase(array: string[]) {
  return [...new Set(array.map((str) => str.toLowerCase()))];
}

const baseSchema = z.object({
  title: z.string().max(60),
});

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: baseSchema.extend({
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
  }),
});

export const collections = { blog };
