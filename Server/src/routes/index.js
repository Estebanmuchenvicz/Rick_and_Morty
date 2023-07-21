const login = require('../controllers/login');
const {getCharById} = require('../controllers/getCharById');
const postUser = require('../controllers/postUser');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');
const { getFavs } = require('../controllers/getFav')
const { Router } = require("express");
const charRoutes = Router();


charRoutes.get('/character/:id', getCharById);
charRoutes.get('/fav', getFavs)

charRoutes.get('/login', login);

charRoutes.post('/register', postUser)

charRoutes.post('/fav', postFav);

charRoutes.delete('/fav/:id', deleteFav);

module.exports = charRoutes;