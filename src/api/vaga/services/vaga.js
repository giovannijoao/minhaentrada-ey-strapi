'use strict';

/**
 * vaga service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vaga.vaga');
