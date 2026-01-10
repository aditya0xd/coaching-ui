import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://coaching-ui-b8qk.vercel.app/sitemap.xml", // TODO: Replace with your actual domain
  };
}
