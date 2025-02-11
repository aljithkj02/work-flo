import api from '@/services/axios'
import { ErrorResponseType } from '@/utils/types/error.type';
import { AddTaskInput, AddTaskResponse, DeleteTaskResponse, GetTasksResponse } from '@/utils/types/task.type';
import { isAxiosError } from 'axios';
import toast from 'react-hot-toast';

export const getTasks = async () => {
    try {
        const response = await api.get<GetTasksResponse>('/task');

        return response.data;
    } catch (error) {
        if (isAxiosError(error)) {
            const response: ErrorResponseType = error.response as ErrorResponseType;
            toast.dismiss();
            toast.error(response.data.message);
            return false;
        }
        console.log((error as Error).message);

        return false;
    }
}

export const createTask = async (payload: AddTaskInput) => {
    try {
        const response = await api.post<AddTaskResponse>('/task', payload);

        toast.dismiss();
        toast.success(response.data.message);
        
        return true;
    } catch (error) {
        if (isAxiosError(error)) {
            const response: ErrorResponseType = error.response as ErrorResponseType;
            toast.dismiss();
            toast.error(response.data?.message);
            return false;
        }
        console.log((error as Error).message);

        return false;
    }
}

export const deleteTask = async (id: string) => {
    try {
        const response = await api.delete<DeleteTaskResponse>(`/task/${id}`);

        toast.dismiss();
        toast.success(response.data.message);
        
        return true;
    } catch (error) {
        if (isAxiosError(error)) {
            const response: ErrorResponseType = error.response as ErrorResponseType;
            toast.dismiss();
            toast.error(response.data?.message);
            return false;
        }
        console.log((error as Error).message);

        return false;
    }
}

export const updateTask = async (id: string, payload: AddTaskInput, isDrag?: boolean) => {
    try {
        const response = await api.post<AddTaskResponse>(`/task/${id}`, payload);

        if (!isDrag) {
            toast.dismiss();
            toast.success(response.data.message);
        }
        
        return true;
    } catch (error) {
        if (isAxiosError(error)) {
            const response: ErrorResponseType = error.response as ErrorResponseType;
            toast.dismiss();
            toast.error(response.data?.message);
            return false;
        }
        console.log((error as Error).message);

        return false;
    }
}

