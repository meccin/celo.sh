import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
  return rss({
    title: "Marcelo Pecin | Blog",
    description: "My journey in this dev world",
    site: context.site!,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
};
