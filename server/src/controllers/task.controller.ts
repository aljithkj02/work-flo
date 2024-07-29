import Task from "@/db/models/task.model";
import { handleZodError } from "@/utils/validators/auth.validator";
import { addTaskBodySchema, AddTaskInput, updateTaskBodySchema, UpdateTaskInput } from "@/utils/validators/task.validator";
import { Request, Response } from "express";
import mongoose from 'mongoose';
import { ZodError } from "zod";
const { ObjectId } = mongoose.Types;


export const getTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await Task.find({
            createdBy: req.user?.id
        });

        return res.json({
            status: true,
            data: tasks
        })
    } catch (error) {
        return res.status(500).json({ status: false, message: 'Internal Server Error' });
    }
}

export const handleUpdateTask = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        
        const validatedBody: UpdateTaskInput = updateTaskBodySchema.parse(req.body);

        const task = await Task.findById(id);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: 'Task not found',
            });
        }

        if (task.createdBy.toString() !== req.user?._id?.toString()) {
            return res.status(403).json({
                success: false,
                message: 'You are not authorized to access this task',
            });
        }

        await Task.findByIdAndUpdate(id, validatedBody);

        return res.status(201).json({
            status: true,
            message: "Task updated successfully"
        })
    } catch (error) {
        if (error instanceof ZodError) {
              return res.status(400).json(handleZodError(error));
        } else {
            console.log(error)
              return res.status(500).json({ status: false, message: 'Internal Server Error' });
        }
    }
}

export const handleCreateTask = async (req: Request, res: Response) => {
    try {
        const validatedBody: AddTaskInput = addTaskBodySchema.parse(req.body);

        await Task.create({
            ...validatedBody,
            createdBy: req.user?.id,
            ...(validatedBody.deadline && { deadline: new Date(validatedBody.deadline)})
        })

        return res.status(201).json({
            status: true,
            message: "Task added successfully"
        })
    } catch (error) {
        if (error instanceof ZodError) {
              return res.status(400).json(handleZodError(error));
        } else {
            console.log(error)
              return res.status(500).json({ status: false, message: 'Internal Server Error' });
        }
    }
}

export const handleDeleteTask = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const task = await Task.findById(id);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: 'Task not found',
            });
        }

        if (task.createdBy.toString() !== req.user?._id?.toString()) {
            return res.status(403).json({
                success: false,
                message: 'You are not authorized to delete this task',
            });
        }

        await Task.findByIdAndDelete(id);

        return res.status(201).json({
            status: true,
            message: "Task deleted successfully"
        })
    } catch (error) {
        if (error instanceof ZodError) {
              return res.status(400).json(handleZodError(error));
        } else {
            console.log(error)
              return res.status(500).json({ status: false, message: 'Internal Server Error' });
        }
    }
}
