const { User } = require('../DB_connection');

module.exports = async (req, res) => {
    const { email, password } = req.query;
    if (!email || !password) return res.status(400).json({ message: "Faltan datos" })
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).json({ message: "Usuario no encontrado" })

    return user.password === password
        ? res.json({ access: true, userId: user.id })
        : res.status(403).json({ message: "Contraseña incorrecta" })
}
