import mongoose, { Document } from "mongoose";
import { PriorityEnum, StatusEnum } from "../enums/model.enum";

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
}

export interface ITask extends Document {
    title: string;
    description?: string;
    priority?: PriorityEnum;
    deadline?: Date;
    status: StatusEnum;
    createdBy: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
  }