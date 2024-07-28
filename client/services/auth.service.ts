import api from '@/services/axios'
import { SignupResponse } from '@/utils/types/auth.type';
import { ErrorResponseType } from '@/utils/types/error.type';
import { TSignupSchema } from '@/utils/validators/auth.validator'
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

        return false;
    }
}