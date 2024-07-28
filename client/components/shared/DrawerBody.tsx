"use client"
import { AddIconBlack } from "@/assets/AddIconBlack"
import { CalenderIcon } from "@/assets/CalenderIcon"
import { DescriptionIcon } from "@/assets/DescriptionIcon"
import { PriorityIcon } from "@/assets/PriorityIcon"
import { StatusIcon } from "@/assets/StatusIcon"
import { Input } from "@/components/shared/Input"
import { Divider, MenuItem } from "@mui/material"
import { useState } from "react"
import { Select } from "@/components/shared/Select"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { StyledDatePicker } from "@/components/shared/StyledDatePicker"

export const DrawerBody = () => {

    const [status, setStatus] = useState("0");
    const [priority, setPriority] = useState("0");
    const [selectedDate, setSelectedDate] = useState(null);
    const today = dayjs();


    const handleDateChange = (date: any) => {
        setSelectedDate(date);
        const readableDate = dayjs(date).format('DD/MM/YYYY');
        console.log(readableDate)
    };

    return (
        <div className="py-6">
            <Input 
                placeholder='Title'
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
                        <Select size="small" value={status} onChange={(e) => setStatus(e.target.value as string)} >
                            <MenuItem value={"0"}>
                                <p className="text-[#C1BDBD] cursor-pointer">Not selected</p>
                            </MenuItem>
                            <MenuItem value={"todo"}>To Do</MenuItem>
                            <MenuItem value={"inprogress"}>In Progress</MenuItem>
                            <MenuItem value={"underreview"}>Under Review</MenuItem>
                            <MenuItem value={"finished"}>Finished</MenuItem>
                        </Select>
                    </div>
                </div>

                <div className="flex items-center"> 
                    <div className="flex items-center gap-4 w-[30%]">
                        <PriorityIcon />
                        <p className="text-[#666666] font-[400] text-[16px]">Priority</p>
                    </div>

                    <div className="w-[70%]">
                        <Select size="small" value={priority} onChange={(e) => setPriority(e.target.value as string)} >
                            <MenuItem value={"0"}>
                                <p className="text-[#C1BDBD] cursor-pointer">Not selected</p>
                            </MenuItem>
                            <MenuItem value={"low"}>
                                <div className={`bg-[#0ECC5A] px-2 py-[2px] inline-block rounded-lg`}>
                                    <p className="text-white font-[400] text-[12px]"> Low </p>
                                </div>
                            </MenuItem>
                            <MenuItem value={"medium"}>
                                <div className={`bg-[#FFA235] px-2 py-[2px] inline-block rounded-lg`}>
                                    <p className="text-white font-[400] text-[12px]"> Medium </p>
                                </div>
                            </MenuItem>
                            <MenuItem value={"urgent"}>
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
                                value={selectedDate}
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

            <Divider sx={{
                my: 3
            }} />

            <div>
                <p className="text-[#C0BDBD] font-[16px]">Start writing, or drag your own files here.</p>
            </div>
        </div>
    )
}
