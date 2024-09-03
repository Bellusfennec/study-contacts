import { makeAutoObservable } from "mobx";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";

export const favoriteContactStore = makeAutoObservable({
  favoriteContact: [] as FavoriteContactsDto,
  set(array: FavoriteContactsDto) {
    this.favoriteContact = array;
  },
});
