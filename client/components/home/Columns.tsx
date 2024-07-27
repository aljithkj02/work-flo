"use client"
import { Data, SingleColumn } from "@/components/home/SingleColumn"
import { columnsData as data } from "@/utils/constants/columnsInfo"
import { DndContext, DragEndEvent } from "@dnd-kit/core"
import { useState } from "react"

enum Keys {
    TODO = 'todo',
    IN_PROGRESS = 'inProgress',
    FINISHED = 'finished',
    UNDER_REVIEW = 'underReview'
}

export const Columns = () => {
    const [columnsData, setColumnsData] = useState(data);

    const handleOnDragEnd = (e: DragEndEvent) => {
        const newItem = e.active.data.current;
        const key = e.over?.id;
        if (!key || !newItem) return;
        if (key === (newItem as Data).status) return;

        console.log({newItem, key})

        const temp = { ...columnsData };

        temp[key as Keys].push({
            ...newItem as Data,
            status: key as Keys
        })

        temp[(newItem as Data).status as Keys] = temp[(newItem as Data).status as Keys].filter((item) => item.id !== (newItem as Data).id);

        setColumnsData(temp);
    }

    return (
        <div className="grid grid-cols-4 rounded-lg bg-white">
            <DndContext onDragEnd={handleOnDragEnd}>
                <SingleColumn 
                    id="todo"
                    colName="To Do"
                    data={columnsData.todo}
                />
                <SingleColumn 
                    id="inProgress"
                    colName="In Progress"
                    data={columnsData.inProgress}
                />
                <SingleColumn 
                    id="underReview"
                    colName="Under Review"
                    data={columnsData.underReview}
                />
                <SingleColumn 
                    id="finished"
                    colName="Finished"
                    data={columnsData.finished}
                />
            </DndContext>
        </div>
    )
}
