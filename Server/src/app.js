const express = require('express');
const server = express();
const charRoutes = require('./routes/index');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');




server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://rick-and-morty-6tb8.vercel.app'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

      
 server.use("/rickandmorty", charRoutes)


 module.exports= server;