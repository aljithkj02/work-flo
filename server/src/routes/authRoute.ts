import { handleLogin, handleSignup } from "@/controllers/auth.controller";
import { Router } from "express";

export const authRouter = Router();

authRouter.post('/signup', handleSignup);
authRouter.post('/login', handleLogin);