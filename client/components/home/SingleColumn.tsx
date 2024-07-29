import { ClockIcon } from '@/assets/ClockIcon'
import { MenuIcon } from '@/assets/MenuIcon'
import { PlusIcon } from '@/assets/PlusIcon'
import { useDraggable, useDroppable } from '@dnd-kit/core';
import React, { ReactNode } from 'react'
import { CSS } from "@dnd-kit/utilities"
import { useAppDispatch } from '@/lib/hooks/store.hook';
import { setIsDrawer } from '@/lib/appStore/slices/global.slice';
import { ITask } from '@/utils/types/task.type';
import moment from 'moment';
import { PriorityEnum } from '@/utils/enums/task.enum';


interface SingleColumnProps {
    colName: string;
    id: string;
    data: ITask[]
}

const Draggable = ({ children, data, colName }: { children: ReactNode, data: ITask, colName: string}) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: `${colName}-${data._id}`,
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
                            if (item.priority === PriorityEnum.URGENT) {
                                bgColor = "bg-[#FF6B6B]"
                            } else if (item.priority === PriorityEnum.MEDIUM) {
                                bgColor = "bg-[#FFA235]"
                            } else if (item.priority === PriorityEnum.LOW) {
                                bgColor = "bg-[#0ECC5A]"
                            }

                            return (
                                <Draggable key={item._id} data={item} colName={colName}>
                                    <div key={item._id} className="p-4 bg-[#F9F9F9] border border-[#DEDEDE] rounded-lg my-4 cursor-pointer">
                                        <p className="text-[#606060] text-[16px] font-medium"> {item.title} </p>
                                        <p className="text-[#797979] text-sm mt-1"> {item.description} </p>
                        
                                        { item.priority && <div className={`${bgColor} px-2 py-1 inline-block rounded-lg my-2`}>
                                            <p className="text-white font-[400] text-[12px]"> {item.priority[0].toUpperCase() + item.priority.slice(1)} </p>
                                        </div> }
                        
                                        { item.deadline && <div className="flex items-center gap-2 my-1">
                                            <ClockIcon />
                                            <p className="text-[#606060] text-sm font-medium">{moment(item.deadline).format('YYYY-MM-DD')}</p>
                                        </div> }
                        
                                        <div className="mt-2">
                                            <p className="text-[#797979] text-sm font-medium">{moment(item.createdAt).fromNow()}</p>
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
