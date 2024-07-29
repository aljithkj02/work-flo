import { StatusEnum } from "@/utils/enums/task.enum"
import { useDroppable } from "@dnd-kit/core"
import { ReactNode } from "react"

interface DroppableProps { 
    children: ReactNode, 
    id: StatusEnum 
}

export const Droppable = ({ children, id }: DroppableProps) => {
    const { setNodeRef } = useDroppable({ id })

    return (
        <div ref={setNodeRef}>
            { children }
        </div>
    )
}
