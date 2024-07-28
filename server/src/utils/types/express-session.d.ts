import session from 'express-session';

declare module 'express-session' {
    interface Session {
        user: {
            id: string;
            name: string;
            email: string;
        };
    }
}