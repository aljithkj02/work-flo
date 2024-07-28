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

interface IGlobalSlice {
    isLoading: boolean;
    user: IUser | null;
    isDrawerOpen: boolean;
    drawerStatus: StatusEnum | null;
    taskData: ITask;
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
        setTaskData: (state, action) => {
            const { name, value }: { name: TaskKeysEnum, value: string } = action.payload;
            state.taskData = {
                ...state.taskData,
                [name]: value
            }
        },
        clearTaskData: (state) => {
            state.taskData = {
                title: '',
                status: '',
                priority: '',
                deadline: '',
                description: ''
            }
        }
    }
})

export default globalSlice.reducer;
export const { setLoading, setUser, setIsDrawer, setDrawerStatus,
        clearTaskData, setTaskData
    } = globalSlice.actions;