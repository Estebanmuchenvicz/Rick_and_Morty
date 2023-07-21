const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id:{
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
      },
      email:{
         type: DataTypes.STRING,
         allowNull: false,
         isEmail: true
      },
      password:{
         type: DataTypes.STRING,
         allowNull: false,
      },
      confirmPassword: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      name: {
         type: DataTypes.STRING,
         allowNull: true,
      },
      resetPasswordToken: {
         type: DataTypes.STRING,
         allowNull: true,
      },
      resetPasswordExpires: {
         type: DataTypes.DATE,
         allowNull: true,
      },
   }, { timestamps: false });
};
