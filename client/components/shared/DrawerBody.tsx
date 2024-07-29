"use client"
import { AddIconBlack } from "@/assets/AddIconBlack"
import { CalenderIcon } from "@/assets/CalenderIcon"
import { DescriptionIcon } from "@/assets/DescriptionIcon"
import { PriorityIcon } from "@/assets/PriorityIcon"
import { StatusIcon } from "@/assets/StatusIcon"
import { Input } from "@/components/shared/Input"
import { Divider, MenuItem, SelectChangeEvent } from "@mui/material"
import { ChangeEvent, useState } from "react"
import { Select } from "@/components/shared/Select"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { StyledDatePicker } from "@/components/shared/StyledDatePicker"
import { useAppDispatch, useAppSelector } from "@/lib/hooks/store.hook"
import { PriorityEnum, StatusEnum, TaskKeysEnum } from "@/utils/enums/task.enum"
import { clearTaskData, setIsDrawer, setRefresh, setTaskDataChange } from "@/lib/appStore/slices/global.slice"
import toast from "react-hot-toast"
import { createTask } from "@/services/task.service"
import { AddTaskInput } from "@/utils/types/task.type"

export const DrawerBody = () => {
    const taskData = useAppSelector(state => state.global.taskData);
    const today = dayjs();

    const dispatch = useAppDispatch();


    const handleDateChange = (date: any) => {
        const readableDate = dayjs(date).format('DD/MM/YYYY');
        dispatch(setTaskDataChange({ name: TaskKeysEnum.DEADLINE, value: readableDate }));
    };

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        dispatch(setTaskDataChange({ name, value }));
    }

    const handleSelctOnChange = (e: SelectChangeEvent<unknown>) => {
        const name = e.target.name;
        const value = e.target.value;

        dispatch(setTaskDataChange({ name, value }));
    }

    const handleSave = async (isUpdate: boolean) => {
        if (!taskData.title) {
            toast.dismiss();
            toast.error("Title cannot be empty!");
            return;
        } else if (!taskData.status || taskData.status === "0") {
            toast.dismiss();
            toast.error("Status cannot be empty!");
            return;
        }
        
        let deadlineString: string = "";
        if (taskData.deadline) {
            const [day, month, year] = taskData.deadline.split('/').map(Number);
            deadlineString = `${month}/${day}/${year}`;
        }

        const payload = {
            title: taskData.title,
            status: taskData.status,
            ...((taskData.priority && taskData.priority !== "0") && { priority: taskData.priority}),
            ...(taskData.description && { description: taskData.description }),
            ...(deadlineString && { deadline: deadlineString })
        }

        const res = await createTask(payload as AddTaskInput);
        
        if (res) {
            dispatch(setRefresh());
            dispatch(clearTaskData());
            dispatch(setIsDrawer(false));
        }
    }

    return (
        <div className="py-6">
            <Input 
                placeholder='Title'
                value={taskData.title}
                name={TaskKeysEnum.TITLE}
                onChange={handleOnChange}
                sx={{
                    '& .MuiInputBase-input': {  
                        backgroundColor: 'white',
                        fontSize: '36px',
                        padding: "0 10px"
                    }, 
                    '& .MuiInputBase-input::placeholder': {
                        color: '#CCCCCC',  
                        fontWeight: 600
                    }
                }}
            />

            <div className="py-4 flex flex-col gap-7">
                <div className="flex items-center"> 
                    <div className="flex items-center gap-4 w-[30%]">
                        <StatusIcon />
                        <p className="text-[#666666] font-[400] text-[16px]">Status</p>
                    </div>

                    <div className="w-[70%]">
                        <Select size="small" value={taskData.status || "0"} onChange={handleSelctOnChange}
                            name={TaskKeysEnum.STATUS}
                        >
                            <MenuItem value={"0"}>
                                <p className="text-[#C1BDBD] cursor-pointer">Not selected</p>
                            </MenuItem>
                            <MenuItem value={StatusEnum.TODO}>To Do</MenuItem>
                            <MenuItem value={StatusEnum.IN_PROGRESS}>In Progress</MenuItem>
                            <MenuItem value={StatusEnum.UNDER_REVIEW}>Under Review</MenuItem>
                            <MenuItem value={StatusEnum.FINISHED}>Finished</MenuItem>
                        </Select>
                    </div>
                </div>

                <div className="flex items-center"> 
                    <div className="flex items-center gap-4 w-[30%]">
                        <PriorityIcon />
                        <p className="text-[#666666] font-[400] text-[16px]">Priority</p>
                    </div>

                    <div className="w-[70%]">
                        <Select size="small" value={taskData.priority || "0"} onChange={handleSelctOnChange} 
                            name={TaskKeysEnum.PRIORITY}
                        >
                            <MenuItem value={"0"}>
                                <p className="text-[#C1BDBD] cursor-pointer">Not selected</p>
                            </MenuItem>
                            <MenuItem value={PriorityEnum.LOW}>
                                <div className={`bg-[#0ECC5A] px-2 py-[2px] inline-block rounded-lg`}>
                                    <p className="text-white font-[400] text-[12px]"> Low </p>
                                </div>
                            </MenuItem>
                            <MenuItem value={PriorityEnum.MEDIUM}>
                                <div className={`bg-[#FFA235] px-2 py-[2px] inline-block rounded-lg`}>
                                    <p className="text-white font-[400] text-[12px]"> Medium </p>
                                </div>
                            </MenuItem>
                            <MenuItem value={PriorityEnum.URGENT}>
                                <div className={`bg-[#FF6B6B] px-2 py-[2px] inline-block rounded-lg`}>
                                    <p className="text-white font-[400] text-[12px]"> Urgent </p>
                                </div>
                            </MenuItem>
                        </Select>
                    </div>
                </div>

                <div className="flex items-center"> 
                    <div className="flex items-center gap-4 w-[30%]">
                        <CalenderIcon />
                        <p className="text-[#666666] font-[400] text-[16px]">Deadline</p>
                    </div>

                    <div className="w-[70%]">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <StyledDatePicker 
                                minDate={today}
                                format='DD/MM/YYYY'
                                value={dayjs(taskData.deadline)}
                                onChange={handleDateChange}
                            />
                        </LocalizationProvider>
                    </div>
                </div>

                <div className="flex items-center"> 
                    <div className="flex items-center gap-4 w-[30%]">
                        <DescriptionIcon />
                        <p className="text-[#666666] font-[400] text-[16px]">Description</p>
                    </div>

                    <div className="w-[70%]">
                        <Input
                            name={TaskKeysEnum.DESCRIPTION}
                            value={taskData.description}
                            onChange={handleOnChange}
                            placeholder='Not selected'
                            sx={{
                                '& .MuiInputBase-input': {  
                                    backgroundColor: 'white',
                                    padding: 0,
                                }, 
                                '& .MuiInputBase-input::placeholder': {
                                    color: 'gray',
                                },
                                width: '100%'
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="mt-4 flex items-center gap-4 font-[400] text-[16px]">
                <AddIconBlack />
                <p>Add custom property</p>
            </div>

            <div className="flex justify-end mt-2 gap-5">
                { 
                    taskData._id ? ( <button className="px-4 py-[6px] bg-blue-500 text-white rounded-lg font-medium disabled:bg-blue-400"
                        onClick={() => handleSave(false)}
                    >
                        Update
                    </button> ) : ( <button className="px-4 py-[6px] bg-blue-500 text-white rounded-lg font-medium disabled:bg-blue-400"
                        onClick={() => handleSave(true)}
                    >
                        Save
                    </button> ) 
                }

                { taskData._id && <button className="px-3 py-[6px] bg-red-500 text-white rounded-lg font-medium">
                    Delete
                </button> }
            </div>

            <Divider sx={{
                my: 3
            }} />

            <div>
                <p className="text-[#C0BDBD] font-[16px]">Start writing, or drag your own files here.</p>
            </div>
        </div>
    )
}
