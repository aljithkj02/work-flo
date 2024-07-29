import { PriorityEnum, StatusEnum } from "@/utils/enums/task.enum";

export interface ITask {
    title: string;
    status: string;
    priority: string;
    deadline: string;
    description: string;
}

export interface AddTaskInput {
    title: string;
    status: StatusEnum;
    priority?: PriorityEnum;
    deadline?: string;
    description?: string;
}

export interface AddTaskResponse {
    status: boolean;
    message: string;
}