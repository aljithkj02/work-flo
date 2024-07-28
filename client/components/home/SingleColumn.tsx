import { ClockIcon } from '@/assets/ClockIcon'
import { MenuIcon } from '@/assets/MenuIcon'
import { PlusIcon } from '@/assets/PlusIcon'
import { useDraggable, useDroppable } from '@dnd-kit/core';
import React, { ReactNode } from 'react'
import { CSS } from "@dnd-kit/utilities"
import { useAppDispatch } from '@/lib/hooks/store.hook';
import { setIsDrawer } from '@/lib/appStore/slices/global.slice';

export interface Data {
    id: number,
    title: string,
    description: string;
    status: string;
    priority: string;
    deadline: string;
    createdAt: string;
}

interface SingleColumnProps {
    colName: string;
    id: string;
    data: Data[]
}

const Draggable = ({ children, data, colName }: { children: ReactNode, data: Data, colName: string}) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: `${colName}-${data.id}`,
        data: data,
    })

    return (
        <div
            ref={setNodeRef}
            style={{ transform: CSS.Translate.toString(transform)}}
            {...attributes}
            {...listeners}
        >
            {children}
        </div>
    )
}

const Droppable = ({ children, id }: { children: ReactNode, id: string }) => {
    const { setNodeRef } = useDroppable({ id})

    return (
        <div ref={setNodeRef}>
            { children }
        </div>
    )
}

export const SingleColumn = ({ colName, data, id }: SingleColumnProps) => {

    const dispatch = useAppDispatch();

    const openDrawer = () => {
        dispatch(setIsDrawer(true));
    }

    return (
        <div className="col-span-1 p-3">
            <div className="flex items-center justify-between">
                <p className="text-lg text-[#555555]">{ colName }</p>
                <MenuIcon />
            </div>

            <Droppable id={id}>
                <div className='min-h-40'>
                    {
                        data.map((item) => {
                            let bgColor = "bg-[#FF6B6B]"
                            if (item.priority === "Urgent") {
                                bgColor = "bg-[#FF6B6B]"
                            } else if (item.priority === "Medium") {
                                bgColor = "bg-[#FFA235]"
                            } else if (item.priority === 'Low') {
                                bgColor = "bg-[#0ECC5A]"
                            }

                            return (
                                <Draggable key={item.id} data={item} colName={colName}>
                                    <div key={item.id} className="p-4 bg-[#F9F9F9] border border-[#DEDEDE] rounded-lg my-4 cursor-pointer">
                                        <p className="text-[#606060] text-[16px] font-medium"> {item.title} </p>
                                        <p className="text-[#797979] text-sm mt-1"> {item.description} </p>
                        
                                        <div className={`${bgColor} px-2 py-1 inline-block rounded-lg my-2`}>
                                            <p className="text-white font-[400] text-[12px]"> {item.priority} </p>
                                        </div>
                        
                                        <div className="flex items-center gap-2 my-1">
                                            <ClockIcon />
                                            <p className="text-[#606060] text-sm font-medium">{item.deadline}</p>
                                        </div>
                        
                                        <div className="mt-2">
                                            <p className="text-[#797979] text-sm font-medium">{item.createdAt}</p>
                                        </div>
                                    </div>
                                </Draggable>
                            )
                        })
                    }

                </div>
            </Droppable>

            <div>
                <button className="flex items-center justify-between w-full px-3 py-2 rounded-lg column-add-btn"
                    onClick={openDrawer}
                >
                    <p className="text-white text-[16px]">Add new</p> 
                    <PlusIcon />
                </button>
            </div>

        </div>
    )
}
