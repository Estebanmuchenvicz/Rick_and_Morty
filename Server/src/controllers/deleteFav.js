const {Favorite, User} = require('../DB_connection');

const deleteFav = async (req, res) => {
	try {
		const {userId} = req.query;
		const { id } = req.params;
		const fav = await Favorite.findOne({ where: { id } })
		await fav.removeUser(userId);
		return res.status(200).json({ success: true });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = deleteFav;