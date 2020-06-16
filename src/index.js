require('dotenv').config()
const express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')
const { CLIENT_ORIGIN } = require('./config/config')
const routes = require('./routes')


const app = express()

app.use(bodyParser.json())
  console.log(' client origin ' , CLIENT_ORIGIN);
  
app.use(cors({ 
  origin: CLIENT_ORIGIN 
})) 

app.use('/', routes)

app.listen(process.env.PORT || 8081, () => console.log('server is running on port' , process.env.PORT))