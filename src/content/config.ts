import { z, defineCollection } from "astro:content";

const casesCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    tags: z.array(z.string()),
    thumbnail: z.string(),
  }),
});
export const collections = {
  cases: casesCollection,
};
