const {Favorite} = require('../DB_connection');

 const postFav = async (req, res) => {
    try {
		const { id, name, origin, status, image, species, gender } = req.body;
		if(!id || !name || !origin || !status || !image || !species || !gender) return res.status(401).json({ error: "Faltan datos" });
		const characterFav = await Favorite.create({ id, name, origin, status, image, species, gender});
		return res.status(200).json(characterFav);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = postFav;