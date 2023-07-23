const express = require('express');
const server = express();
const charRoutes = require('./routes/index');
const morgan = require('morgan');


server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', 'https://rick-and-morty-6tb8.vercel.app');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
      );
      res.header(
         'Access-Control-Allow-Methods',
         'GET, POST, OPTIONS, PUT, DELETE'
         );
         next();
      });
      
      server.use(express.json());
      server.use(morgan('dev'));
      
 server.use("/rickandmorty", charRoutes)


 module.exports= server;