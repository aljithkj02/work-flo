import { z } from "zod";


export const loginSchema = z.object({
    email: z.string().email('Please provide a valid email'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export type TLoginSchema = z.infer<typeof loginSchema>;


export const signupSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email('Please provide a valid email'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export type TSignupSchema = z.infer<typeof signupSchema>;