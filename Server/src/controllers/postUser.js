const { User } = require('../DB_connection');

module.exports = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    // Verificar que los campos requeridos no estén vacíos
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).send({message: "Faltan datos"});
    }

    // Verificar que el password y la confirmación coincidan
    if (password !== confirmPassword) {
      return res.status(400).send({message: "El password y la confirmación no coinciden"});
    }

    // Verificar si el email ya está registrado
    const existingUser = await User.findOne({ where: { email: email } });
    if (existingUser) {
      return res.status(409).send({message: "El email ya está registrado"});
    }

    // Aquí deberías realizar el hash o encriptación del password antes de guardarlo en la base de datos
    // Puedes utilizar una librería como bcrypt para hacer esto

    // Crear el nuevo usuario
    const newUser = await User.create({ name, email, password,confirmPassword });

    res.status(201).json(newUser);
  } catch (error) {
    return res.status(400).json({error: error.message});
  }
};
