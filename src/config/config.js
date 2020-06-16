exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
  ? ' heroku link'
  : 'http://localhost:4200'
