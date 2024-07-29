import { ITask } from "@/utils/types/task.type"
import { useDraggable } from "@dnd-kit/core"
import { ReactNode } from "react"
import { CSS } from "@dnd-kit/utilities"

interface DraggableProps { 
    children: ReactNode, 
    data: ITask, 
    colName: string 
}

export const Draggable = ({ children, data, colName }: DraggableProps) => {
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