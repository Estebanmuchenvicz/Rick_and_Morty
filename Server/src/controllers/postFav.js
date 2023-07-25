const {Favorite, User} = require('../DB_connection');

 const postFav = async (req, res) => {
    try {
		const { userId, id, name, origin, status, image, species, gender } = req.body;
		if(userId, !id || !name || !origin || !status || !image || !species || !gender) return res.status(401).json({ error: "Faltan datos" });
		const characterFav = await Favorite.create({ 
			userId, id, name, origin, status, image, species, gender});
			characterFav.addUser(userId);

    const favs = await Favorite.findAll({
      include: [{ model: User, where: { id: userId } }],
    });

		return res.status(200).json({message: "Agregaste a favaritos", favs});
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
};

module.exports = postFav;