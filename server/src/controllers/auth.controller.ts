import { User } from "@/db/models/user.model";
import { handleZodError, LoginInput, loginSchema, SignupInput, signupSchema } from "@/utils/validators/auth.validator";
import { Request, Response } from "express";
import { ZodError } from "zod";

export const handleSignup = async (req: Request, res: Response) => {
    try {
        const validatedBody: SignupInput = signupSchema.parse(req.body);

        const isUserExist = await User.findOne({
            email: validatedBody.email
        })

        if (isUserExist) {
            return res.status(409).json({ 
                status: false,
                message: 'User with this email already exists' 
            });
        }

        const user = await User.create({ ...validatedBody });
        
        return res.status(201).json({ 
            status: true,
            message: 'User signed up successfully' 
        });
    } catch (error) {
      if (error instanceof ZodError) {
            return res.status(400).json(handleZodError(error));
      } else {
            return res.status(500).json({ status: false, message: 'Internal Server Error' });
      }
    }
}

export const handleLogin = async (req: Request, res: Response) => {
    try {
        const validatedBody: LoginInput = loginSchema.parse(req.body);

        const user = await User.findOne({
            email: validatedBody.email
        })

        if (!user) {
            return res.status(404).json({ status: false, message: 'User not found' });
        }

        const isPasswordCorrect = await user.comparePassword(validatedBody.password);

        if (!isPasswordCorrect) {
            return res.status(401).json({ status: false, message: 'Invalid password' });
        }
        
        req.session.user = {
            id: user._id as string,
            name: user.name,
            email: user.email
        }
        
        return res.status(200).json({ 
            status: true,
            message: 'Login successful',
            user: req.session.user 
        });
    } catch (error) {
      if (error instanceof ZodError) {
            return res.status(400).json(handleZodError(error));
      } else {
            return res.status(500).json({ status: false, message: 'Internal Server Error' });
      }
    }
}