import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "employee_task_db",   // database name
  "root",               // username
  "Khsi12234#@!",           // password
  {
    host: "localhost",
    dialect: "mysql",
  }
);

export default sequelize;
