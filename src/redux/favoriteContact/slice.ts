import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";

const initialState: FavoriteContactsDto = [];

export const favoriteContactSlice = createSlice({
  name: "favoriteContact",
  initialState,
  reducers: {
    setFavoriteContact: (state, action: PayloadAction<any>) => [...state, ...action.payload],
  },
});
