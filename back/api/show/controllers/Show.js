'use strict';

/**
 * Show.js controller
 *
 * @description: A set of functions called "actions" for managing `Show`.
 */

module.exports = {

  /**
   * Retrieve show records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.show.search(ctx.query);
    } else {
      return strapi.services.show.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a show record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.show.fetch(ctx.params);
  },

  /**
   * Count show records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.show.count(ctx.query);
  },

  /**
   * Create a/an show record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.show.add(ctx.request.body);
  },

  /**
   * Update a/an show record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.show.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an show record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.show.remove(ctx.params);
  }
};
