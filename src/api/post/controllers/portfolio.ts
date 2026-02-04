import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::portfolio.portfolio', ({ strapi }) => ({
  async findSorted(ctx) {
    const entries = await strapi.db.query('api::portfolio.portfolio').findMany({
      where: {
        // launched: { $notNull: true },          // Filter out nulls (unlaunched)
        publishedAt: { $notNull: true },       // Only published entries (mimics default REST behavior)
      },
      orderBy: { launched: 'desc' },           // Newest launched first — this works reliably in DB
      // populate: '*',                           // Populate all relations/media (or specify like { cover: true })
      // Add limits/pagination if you grow beyond 6 entries, e.g. offset/start + limit
    });

    // Return in the standard Strapi format (data + meta) so your frontend doesn't notice the difference
    ctx.body = {
      data: entries,
      meta: {
        pagination: {
          total: entries.length,
          // Add page/pageSize etc. if you implement pagination here
        },
      },
    };
  },
}));
