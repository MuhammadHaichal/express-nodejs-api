import { DataTypes } from "sequelize";
import database from "../database.js";

const usersModels = database.define(
   'tb_users',
   {
      // Model attributes are defined here
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true
      }, 
      username: {
         type: DataTypes.STRING(35),
         allowNull: false,
         primaryKey: true
      },
      password: {
         type: DataTypes.TEXT,
         allowNull: false
      },
   },
   {
      // Other model options go here
   },
);

// for sync tables 
// usersModels.sync({ force: true})

export default usersModels
