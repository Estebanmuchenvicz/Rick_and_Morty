const {login} = require('../controllers/loginControllers');
const {getCharById} = require('../controllers/getCharById');
const {postFav, deleteFav} = require('../controllers/handleFavorites');
const { Router } = require("express");
const charRoutes = Router();


charRoutes.get('/character/:id', getCharById);

charRoutes.get('/login', login);

charRoutes.post('/fav', postFav);

charRoutes.delete('/fav/:id', deleteFav);

module.exports = charRoutes;