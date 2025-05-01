import { Core } from "@strapi/strapi";

export default {
  routes: [
    {
      method: "GET",
      path: "/post/:slug",
      handler: "post.findOneBySlug",
      config: {
        auth: false,
      },
    },
  ],
} as Core.Router;
