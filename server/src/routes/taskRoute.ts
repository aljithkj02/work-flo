import { getTasks, handleCreateTask, handleDeleteTask, handleUpdateTask } from "@/controllers/task.controller";
import { authMiddleware } from "@/utils/middlewares/auth.middleware";
import { Router } from "express";

export const taskRouter = Router();

taskRouter.get('/', authMiddleware, getTasks);
taskRouter.post('/', authMiddleware, handleCreateTask);
taskRouter.post('/:id', authMiddleware, handleUpdateTask);
taskRouter.delete('/:id', authMiddleware, handleDeleteTask);