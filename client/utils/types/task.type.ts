import { PriorityEnum, StatusEnum } from "@/utils/enums/task.enum";

export interface ITask {
    _id?: string;
    title: string;
    status: StatusEnum | string;
    priority: PriorityEnum | string;
    deadline: string;
    description: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface AddTaskInput {
    title: string;
    status: StatusEnum | string;
    priority?: PriorityEnum | string;
    deadline?: string;
    description?: string;
}

export interface GetTasksResponse {
    status: boolean;
    data: ITask[]
}

export interface AddTaskResponse {
    status: boolean;
    message: string;
}

export interface DeleteTaskResponse extends AddTaskResponse {};