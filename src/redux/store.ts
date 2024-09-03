import { configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux";
import { Action, combineReducers } from "redux";
import { contactApiMiddleware, contactApiReducer, contactApiReducerPath } from "./contact";
import { groupContactApiMiddleware, groupContactApiReducer, groupContactApiReducerPath } from "./groupContact";
import { favoriteContactName, favoriteContactReducer } from "./favoriteContact";

const rootReducer = combineReducers({
  [favoriteContactName]: favoriteContactReducer,
  [contactApiReducerPath]: contactApiReducer,
  [groupContactApiReducerPath]: groupContactApiReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat([contactApiMiddleware, groupContactApiMiddleware]);
  },
});

export type RootState = ReturnType<typeof rootReducer>;

// Hooks for Redux
export const useAppDispatch = useDispatch<ThunkDispatch<RootState, void, Action>>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = useStore<RootState>;
