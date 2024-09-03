import { makeAutoObservable } from "mobx";
import { ContactDto } from "src/types/dto/ContactDto";
import { contactApi } from "./api";

export const contactStore = makeAutoObservable({
  contact: [] as ContactDto[],
  *get() {
    const result: ContactDto[] = yield contactApi.getContacts();
    this.contact = result;
  },
});
