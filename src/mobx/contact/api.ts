import { ContactDto } from "src/types/dto/ContactDto";

const url = "https://fs.gcfiles.net/fileservice/file/download/a/177331/sc/190/h/560e0501fa0e19aed9ef169df6095f00.json";

class ContactApi {
  async getContacts(): Promise<ContactDto[]> {
    const response = await fetch(url).then((res) => res.json());
    return response;
  }
}
export const contactApi = new ContactApi();
