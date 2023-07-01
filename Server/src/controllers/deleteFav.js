const {Favorite} = require('../DB_connection');

const deleteFav = async (req, res) => {
	try {
		const { id } = req.params;
		const fav = await Favorite.findOne({ where: { id } })
		await fav.destroy();;
		return res.status(200).json(fav);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = deleteFav;