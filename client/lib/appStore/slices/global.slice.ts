import { createSlice } from "@reduxjs/toolkit";

interface IGlobalSlice {
    isLoading: boolean;
}

const initialState: IGlobalSlice = {
    isLoading: false
}

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    }
})

export default globalSlice.reducer;
export const { setLoading } = globalSlice.actions;