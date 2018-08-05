'use strict';

/**
 * Hkx.js controller
 *
 * @description: A set of functions called "actions" for managing `Hkx`.
 */

module.exports = {

  /**
   * Retrieve hkx records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.hkx.search(ctx.query);
    } else {
      return strapi.services.hkx.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a hkx record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.hkx.fetch(ctx.params);
  },

  /**
   * Count hkx records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.hkx.count(ctx.query);
  },

  /**
   * Create a/an hkx record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.hkx.add(ctx.request.body);
  },

  /**
   * Update a/an hkx record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.hkx.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an hkx record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.hkx.remove(ctx.params);
  }
};
