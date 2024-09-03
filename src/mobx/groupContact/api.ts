import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

const url = "https://fs.gcfiles.net/fileservice/file/download/a/177331/sc/503/h/03b7cef5194e433422491a8f22413a18.json";

class GroupContactApi {
  async getGroupContacts(): Promise<GroupContactsDto[]> {
    const response = await fetch(url).then((res) => res.json());
    console.log("GroupContactApi", response);

    return response;
  }
}
export const groupContactApi = new GroupContactApi();
