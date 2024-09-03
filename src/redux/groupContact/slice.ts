import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const groupContactApiSlice = createApi({
  reducerPath: "groupContactApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fs.gcfiles.net/fileservice/file/download/a/177331/sc" }),
  endpoints: (builder) => ({
    getGroupContacts: builder.query<GroupContactsDto[], void>({
      query() {
        return {
          url: "/503/h/03b7cef5194e433422491a8f22413a18.json",
        };
      },
    }),
  }),
});
