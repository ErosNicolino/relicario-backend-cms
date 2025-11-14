// backend/config/server.js
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['q2W8eR4tY1uI6oP7aS3dF5gH9jK0lLzX']),
  },
  admin: {
    auth: {
      secret: env('JWT_SECRET'), 
    },
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});