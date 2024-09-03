import { groupContactApiSlice } from "./slice";

export const groupContactApiReducer = groupContactApiSlice.reducer;
export const groupContactApiReducerPath = groupContactApiSlice.reducerPath;
export const groupContactApiMiddleware = groupContactApiSlice.middleware;

export const { useGetGroupContactsQuery } = groupContactApiSlice;
