import { defineConfig } from "astro/config";
import rehypeClassNames from "rehype-class-names";

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [
      [
        rehypeClassNames,
        {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
          p: "p",
          ul: "ul",
          ol: "ol",
          li: "li",
        },
      ],
    ],
  },
});
