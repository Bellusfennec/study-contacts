import { favoriteContactSlice } from "./slice";

export const favoriteContactReducer = favoriteContactSlice.reducer;
export const favoriteContactName = favoriteContactSlice.name;

export const { setFavoriteContact } = favoriteContactSlice.actions;
