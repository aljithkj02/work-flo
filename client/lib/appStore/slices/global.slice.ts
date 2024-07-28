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
}

const initialState: IGlobalSlice = {
    isLoading: false,
    user
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
        }
    }
})

export default globalSlice.reducer;
export const { setLoading, setUser } = globalSlice.actions;