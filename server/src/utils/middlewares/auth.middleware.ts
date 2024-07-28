import { User } from '@/db/models/user.model';
import { Request, Response, NextFunction } from 'express';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    if (req.session && req.session.user) {
        try {
            const user = await User.findById(req.session.user.id);
            if (user) {
                req.user = user;
                return next();
            } else {
                return res.status(401).json({ status: false, message: 'User not found. Please log in again.' });
            }
        } catch (error) {
            console.error('Error fetching user from database:', error);
            return res.status(500).json({ status: false, message: 'Internal server error.' });
        }
    } else {
        res.status(401).json({ status: false, message: 'Unauthorized user' });
    }
};