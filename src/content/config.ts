import { z, defineCollection } from "astro:content";

const workCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    jobs: z.array(z.string()),
    imagesFolder: z.string(),
  }),
});
export const collections = {
  work: workCollection,
};
