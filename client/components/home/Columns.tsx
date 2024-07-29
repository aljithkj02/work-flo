"use client"
import { SingleColumn } from "@/components/home/SingleColumn"
import { setData, setLoading, setUser } from "@/lib/appStore/slices/global.slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/store.hook";
import { getTasks } from "@/services/task.service";
import { StatusEnum } from "@/utils/enums/task.enum";
import { ITask } from "@/utils/types/task.type";
import { DndContext, DragEndEvent } from "@dnd-kit/core"
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export const Columns = () => {
    const {data, refresh} = useAppSelector(state => state.global);
    const [columnsData, setColumnsData] = useState(data);
    const router = useRouter();
    const dispatch = useAppDispatch();

    useEffect(() => {
        fetchTasks();
    }, [refresh])

    const fetchTasks = async () => {
        dispatch(setLoading(true));
        const res = await getTasks();
        if (!res) {
            dispatch(setUser(null));
            router.push('/login');
            return;
        }
        dispatch(setLoading(false));
        dispatch(setData(res.data));
    }

    const handleOnDragEnd = (e: DragEndEvent) => {
        const newItem = e.active.data.current;
        const key = e.over?.id;
        if (!key || !newItem) return;
        if ((key as string).toLowerCase() === (newItem as ITask).status) return;

        console.log({newItem, key})

        const temp = { ...columnsData };

        // temp[key as Keys].push({
        //     ...newItem as Data,
        //     status: key as Keys
        // })

        // temp[(newItem as Data).status as Keys] = temp[(newItem as Data).status as Keys].filter((item) => item.id !== (newItem as Data).id);

        // setColumnsData(temp);
    }

    return (
        <div className="grid grid-cols-4 rounded-lg bg-white">
            <DndContext onDragEnd={handleOnDragEnd} modifiers={[restrictToWindowEdges]} >
                <SingleColumn 
                    id={StatusEnum.TODO}
                    colName="To Do"
                    data={data.todo}
                />
                <SingleColumn 
                    id={StatusEnum.IN_PROGRESS}
                    colName="In Progress"
                    data={data.inProgress}
                />
                <SingleColumn 
                    id={StatusEnum.UNDER_REVIEW}
                    colName="Under Review"
                    data={data.underReview}
                />
                <SingleColumn 
                    id={StatusEnum.FINISHED}
                    colName="Finished"
                    data={data.finished}
                />
            </DndContext>
        </div>
    )
}
