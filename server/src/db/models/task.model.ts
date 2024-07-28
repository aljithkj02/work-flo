import { PriorityEnum, StatusEnum } from '@/utils/enums/model.enum';
import { ITask } from '@/utils/types/model.type';
import mongoose, { Schema } from 'mongoose';

const TaskSchema: Schema<ITask> = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    description: {
      type: String,
    },
    priority: {
      type: String,
      enum: PriorityEnum
    },
    deadline: {
      type: Date,
      default: null,
    },
    status: {
      type: String,
      enum: StatusEnum,
      required: [true, 'Status is required'],
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Created by user is required'],
    },
  },
  {
    timestamps: true,
  }
);

TaskSchema.index({ createdBy: 1 });

const Task = mongoose.model<ITask>('Task', TaskSchema);
export default Task;
