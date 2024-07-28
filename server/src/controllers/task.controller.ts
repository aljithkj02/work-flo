import Task from "@/db/models/task.model";
import { Request, Response } from "express";


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