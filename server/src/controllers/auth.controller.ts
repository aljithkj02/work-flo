import { User } from "@/db/models/user.model";
import { handleZodError, SignupInput, signupSchema } from "@/utils/validators/auth.validator";
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
            return res.status(500).json({ message: 'Internal Server Error' });
      }
    }
}