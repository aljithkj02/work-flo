import { StatusEnum, TaskKeysEnum } from "@/utils/enums/task.enum";
import { ITask } from "@/utils/types/task.type";
import { createSlice } from "@reduxjs/toolkit";

let data: string | null = null;

if (typeof window !== 'undefined') {
    data = localStorage.getItem('user');
}

let user: IUser | null = null;

if (data) {
    user = JSON.parse(data);
}

interface IUser {
    id: string;
    name: string;
    email: string;
}

interface IData {
    todo: ITask[];
    inProgress: ITask[];
    underReview: ITask[];
    finished: ITask[];
}

interface IGlobalSlice {
    isLoading: boolean;
    user: IUser | null;
    isDrawerOpen: boolean;
    drawerStatus: StatusEnum | null;
    taskData: ITask;
    data: IData;
}

const initialState: IGlobalSlice = {
    isLoading: false,
    user,
    isDrawerOpen: false,
    drawerStatus: null,
    taskData: {
        title: '',
        status: '',
        priority: '',
        deadline: '',
        description: ''
    },
    data: {
        todo: [],
        inProgress: [],
        underReview: [],
        finished: []
    }
}

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        setIsDrawer: (state, action) => {
            state.isDrawerOpen = action.payload;
        },
        setDrawerStatus: (state, action) => {
            state.drawerStatus = action.payload;
        },
        setTaskDataChange: (state, action) => {
            const { name, value }: { name: TaskKeysEnum, value: string } = action.payload;
            state.taskData = {
                ...state.taskData,
                [name]: value
            }
        },
        setTaskData: (state, action) => {
            state.taskData = action.payload;
        },
        clearTaskData: (state) => {
            state.taskData = {
                title: '',
                status: '',
                priority: '',
                deadline: '',
                description: ''
            }
            state.drawerStatus = null;
        },
        setData: (state, action) => {
            const tempData: ITask[] = action.payload;
            const newData: IData = {
                todo: [],
                inProgress: [],
                underReview: [],
                finished: []
            }

            tempData.map((item) => {
                if (item.status === StatusEnum.TODO) {
                    newData.todo.push(item);
                } else if (item.status === StatusEnum.IN_PROGRESS) {
                    newData.inProgress.push(item);
                } else if (item.status === StatusEnum.UNDER_REVIEW) {
                    newData.underReview.push(item);
                } else if (item.status === StatusEnum.FINISHED) {
                    newData.finished.push(item);
                }
            })

            state.data = newData;
        }
    }
})

export default globalSlice.reducer;
export const { setLoading, setUser, setIsDrawer, setDrawerStatus,
        clearTaskData, setTaskDataChange, setData, setTaskData
    } = globalSlice.actions;