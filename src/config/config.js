exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
  ? ' https://finlex-backend.herokuapp.com/ '
  : 'http://localhost:4200'
