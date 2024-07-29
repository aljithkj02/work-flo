import { getTasks, handleCreateTask } from "@/controllers/task.controller";
import { authMiddleware } from "@/utils/middlewares/auth.middleware";
import { Router } from "express";

export const taskRouter = Router();

taskRouter.get('/', authMiddleware, getTasks);
taskRouter.post('/', authMiddleware, handleCreateTask);