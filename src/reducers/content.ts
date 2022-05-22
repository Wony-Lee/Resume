import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ContentState {
    tab?: number;
}

const initialState: ContentState = {
    tab: 0
}

export const contentSlice = createSlice({
    name:"content_tab",
    initialState,
    reducers:{
        setSelectTab(state, action:PayloadAction<number>) {
            state.tab = action.payload
        }
    }
})


export const { setSelectTab } = contentSlice.actions

export default contentSlice
