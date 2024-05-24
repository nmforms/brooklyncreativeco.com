import { z, defineCollection } from "astro:content";

const casesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    jobs: z.array(z.string()),
    thumbnail: z.string(),
    images: z.array(z.string()),
  }),
});
export const collections = {
  cases: casesCollection,
};
