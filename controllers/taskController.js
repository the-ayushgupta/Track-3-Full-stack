import Task from "../models/task.js";
import Employee from "../models/employee.js";

export const getTasks = async (req, res) => {
  try {
    const data = await Task.findAll({ include: Employee });
    res.json(data);
  } catch {
    res.status(500).json({ error: "Server Error" });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const data = await Task.findByPk(req.params.id, { include: Employee });
    if (!data) return res.status(404).json({ message: "Not found" });
    res.json(data);
  } catch {
    res.status(500).json({ error: "Server Error" });
  }
};

export const createTask = async (req, res) => {
  try {
    const data = await Task.create(req.body);
    res.status(201).json(data);
  } catch {
    res.status(500).json({ error: "Error creating task" });
  }
};

export const updateTask = async (req, res) => {
  try {
    await Task.update(req.body, { where: { id: req.params.id } });
    const updated = await Task.findByPk(req.params.id);
    res.json(updated);
  } catch {
    res.status(500).json({ error: "Error updating task" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    await Task.destroy({ where: { id: req.params.id } });
    res.json({ message: "Task deleted" });
  } catch {
    res.status(500).json({ error: "Error deleting task" });
  }
};
