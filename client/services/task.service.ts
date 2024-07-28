import api from '@/services/axios'
import { ErrorResponseType } from '@/utils/types/error.type';
import { isAxiosError } from 'axios';
import toast from 'react-hot-toast';

export const getTasks = async () => {
    try {
        const response = await api.get('/task');

        console.log({response})
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
