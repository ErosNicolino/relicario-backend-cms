// backend/config/env/production/server.js

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {

    keys: [env('JWT_SECRET')], 
  },
  admin: {
    auth: {
      secret: env('JWT_SECRET'), 
    },
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});