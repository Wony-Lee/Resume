import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contentSlice from "../reducers/content";


const rootReducer = combineReducers({
    content: contentSlice.reducer
});
const initialState = {};

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
    preloadedState: initialState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
