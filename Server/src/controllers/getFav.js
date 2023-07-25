const axios = require("axios"); //esta forma de importar commonjs
const { Favorite, User } = require("../DB_connection.js");

const getFavs = async (req, res) => {
  const { userId } = req.query;
  try {
    const favs = await Favorite.findAll({
      include: [{ model: User, where: { id: userId } }],
    });
    return res.status(200).json(favs);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { getFavs };
