import sequelize from "../config/db.js";
import Employee from "./employee.js";
import Task from "./task.js";

Employee.hasMany(Task, { foreignKey: "employeeId", onDelete: "CASCADE" });
Task.belongsTo(Employee, { foreignKey: "employeeId" });

const db = { sequelize, Employee, Task };

export default db;
