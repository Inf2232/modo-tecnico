import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    date: z.coerce.date(),
    category: z.enum([
      "Windows",
      "Linux",
      "Hardware",
      "Mantenimiento",
      "Redes",
      "Seguridad",
      "Tutoriales",
    ]),
    author: z.string().optional(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { blog };