import { Request } from 'express';
import { IUser } from '@/utils/types/model.type';

declare module 'express' {
    interface Request {
        user?: IUser
    }
}