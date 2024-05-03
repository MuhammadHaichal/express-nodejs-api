import "dotenv/config"
import mysql from "mysql2"
import { Sequelize } from "sequelize";

const database = new Sequelize(
   `${process.env.database_name}`,
   `${process.env.username}`, 
   `${process.env.password}`,
   {
      host: `${process.env.hostname}`,
      dialect: "mysql"
   }
)

try {
  console.log('Connection database has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


export default database
