module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '46a203897277c9c86c389ac90beddf34'),
  },
});
