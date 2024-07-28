import api from '@/services/axios'
import { LoginResponse, SignupResponse } from '@/utils/types/auth.type';
import { ErrorResponseType } from '@/utils/types/error.type';
import { TLoginSchema, TSignupSchema } from '@/utils/validators/auth.validator'
import { isAxiosError } from 'axios';
import toast from 'react-hot-toast';

export const signupUser = async (payload: TSignupSchema) => {
    try {
        const response = await api.post<SignupResponse>('auth/signup', payload);

        toast.dismiss();
        toast.success(response.data.message);
        
        return true;
    } catch (error) {
        if (isAxiosError(error)) {
            const response: ErrorResponseType = error.response as ErrorResponseType;
            toast.dismiss();
            toast.error(response.data.message);
        }
        console.log((error as Error).message);

        return false;
    }
}

export const loginUser = async (payload: TLoginSchema) => {
    try {
        const response = await api.post<LoginResponse>('auth/login', payload);

        toast.dismiss();
        toast.success(response.data.message);

        return response.data;
    } catch (error) {
        if (isAxiosError(error)) {
            const response: ErrorResponseType = error.response as ErrorResponseType;
            toast.dismiss();
            toast.error(response.data.message);
        }
        console.log((error as Error).message);

        return null;
    }
}