import { contactApiSlice } from "./slice";

export const contactApiReducer = contactApiSlice.reducer;
export const contactApiReducerPath = contactApiSlice.reducerPath;
export const contactApiMiddleware = contactApiSlice.middleware;

export const { useGetContactsQuery } = contactApiSlice;
