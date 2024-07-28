"use client"
import { BellIcon } from '@/assets/BellIcon'
import { RightArrow } from '@/assets/RightArrow'
import { SunIcon } from '@/assets/Sun'
import { Avatar } from '@mui/material'
import { sidebarData } from '@/utils/constants/sidebarInfo'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { AddIcon } from '@/assets/AddIcon'
import { DownloadIcon } from '@/assets/DownloadIcon'
import { useAppSelector } from '@/lib/hooks/store.hook'


export const Sidebar = () => {
    const user = useAppSelector(state => state.global.user);
    const [client, setClient] = useState(false);

    useEffect(() => setClient(true), []);

    return (
        <div className='fixed w-[20%] h-screen bg-white p-5 shadow-lg flex flex-col justify-between'>
            <div>
                <div className='flex gap-2 items-center'>
                    <Avatar alt={user?.name || "Avatar"} sx={{ width: 34, height: 34 }}/>
                    <p className='text-[#080808] text-lg font-semibold'>
                        { client ? user?.name : "User" }
                    </p>
                </div>

                <div className='mt-4 flex justify-between items-center'>
                    <div className='flex items-center gap-3'>
                        <BellIcon />
                        <SunIcon />
                        <RightArrow />
                    </div>

                    <div>
                        <button className='bg-[#F4F4F4] p-2 rouned-md text-[#797979]'>Logout</button>
                    </div>
                </div>

                <div className='mt-4'>
                    {
                        sidebarData.map((item) => {
                            return (
                                <Link href={item.url} key={item.id}>
                                    <div className={`flex items-center gap-2 p-2 transition-all duration-100 ${item.name === "Home" ? 'bg-[#F4F4F4] border border-[#DDDDDD]': 'hover:bg-[#F4F4F4]'}`}>
                                        { <item.icon /> }
                                        <p className='text-[#797979]'>{ item.name }</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>

                <div className='mt-3'>
                    <button className='create-task-btn text-white p-[12px] flex items-center justify-center w-full text-lg gap-3 font-semibold rounded-lg'>
                        Create new task
                        <AddIcon />
                    </button>
                </div>
            </div>

            <div>
                <div className='bg-[#F3F3F3] flex p-2 items-center gap-2 rounded-lg'>
                    <div>
                        <DownloadIcon />
                    </div>
                    
                    <div>
                        <p className='text-[#666666] text-[18px] font-medium'>Download the app</p>
                        <p className='text-[#666666] text-[13px]'>Get the full experience</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
