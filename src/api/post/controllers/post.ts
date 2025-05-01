/**
 * post controller
 */

import { factories } from "@strapi/strapi";
import { sanitize, validate } from '@strapi/utils';

export default factories.createCoreController(
  "api::post.post",
  ({ strapi }) => ({
    async findOneBySlug(ctx) {
      const contentType = strapi.contentType("api::post.post");

      await strapi.contentAPI.validate.query(ctx.params, contentType)
      const sanitizedParams = await strapi.contentAPI.sanitize.query(ctx.params, contentType)

      const post = await strapi.query("api::post.post").findOne({
        where: { slug: sanitizedParams.slug },
      });

      // const { } = await super.find

      return this.transformResponse(post, {});
    },
  }),
);
