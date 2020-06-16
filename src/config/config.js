exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
  ? ' heroku front end url '
  : 'http://localhost:4200'
