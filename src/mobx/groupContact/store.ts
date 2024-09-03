import { makeAutoObservable } from "mobx";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { groupContactApi } from "./api";

export const groupContactStore = makeAutoObservable({
  groupContact: [] as GroupContactsDto[],
  *get() {
    const result: GroupContactsDto[] = yield groupContactApi.getGroupContacts();
    this.groupContact = result;
  },
});
