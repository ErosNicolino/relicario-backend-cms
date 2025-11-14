// backend/config/env/production/server.js

module.exports = ({ env }) => ({
  app: {
    keys: env.array('APP_KEYS'),
  },
  admin: {
    auth: {
      secret: env('JWT_SECRET'),
    },
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337), 
});