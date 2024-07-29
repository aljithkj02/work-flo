import { z } from "zod";
import { PriorityEnum, StatusEnum } from "@/utils/enums/model.enum";

export const addTaskBodySchema = z.object({
    title: z.string().min(1, 'Title is mandatory and must be a non-empty string'),
    status: z.nativeEnum(StatusEnum, {
        errorMap: () => ({ message: `Status must be one of: ${Object.values(StatusEnum).join(', ')}` }),
    }),
    priority: z.nativeEnum(PriorityEnum).optional(),
    deadline: z.string().optional(),
    description: z.string().optional(),
});
  
export type AddTaskInput = z.infer<typeof addTaskBodySchema>;

export const updateTaskBodySchema = z.object({
    title: z.string().min(1, 'Title must be a non-empty string').optional(),
    status: z.nativeEnum(StatusEnum, {
        errorMap: () => ({ message: `Status must be one of: ${Object.values(StatusEnum).join(', ')}` }),
    }).optional(),
    priority: z.nativeEnum(PriorityEnum).optional(),
    deadline: z.string().optional(),
    description: z.string().optional(),
});
  
export type UpdateTaskInput = z.infer<typeof updateTaskBodySchema>;