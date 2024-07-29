import Task from "@/db/models/task.model";
import { handleZodError } from "@/utils/validators/auth.validator";
import { addTaskBodySchema, AddTaskInput } from "@/utils/validators/task.validator";
import { Request, Response } from "express";
import { ZodError } from "zod";


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