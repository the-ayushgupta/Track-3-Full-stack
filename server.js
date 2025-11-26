import express from "express";
import cors from "cors";
import db from "./models/index.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/employees", employeeRoutes);
app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Backend API with MySQL running...");
});

// Sync DB and start server
db.sequelize.sync().then(() => {
  console.log("Database synced");
  app.listen(5000, () => console.log("Server running on port 5000"));
});
