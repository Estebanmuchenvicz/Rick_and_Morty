const { Sequelize } = require('sequelize');
require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME,DB_PORT } = process.env;
const FavoriteModel = require('./models/Favorite');
const UserModel = require('./models/User');



// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
   { logging: false, native: false }
);


FavoriteModel(sequelize)
UserModel(sequelize)


const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: "user_favorite",timestamps: false });
Favorite.belongsToMany(User, { through: "user_favorite",timestamps: false });

module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
