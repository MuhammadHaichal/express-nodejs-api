import "dotenv/config"
import { Sequelize } from "sequelize";

const database = new Sequelize(
   process.env.database_name,
   process.env.username,
   process.env.password,
   {
      host: process.env.host,
      dialect: process.env.db_type
   }
)

try {
   database.authenticate()
   console.log('Connection database has been established successfully.');
} catch (error) {
   console.error('Unable to connect to the database:', error);
}


export default database
