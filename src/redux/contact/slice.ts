import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ContactDto } from "src/types/dto/ContactDto";

export const contactApiSlice = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fs.gcfiles.net/fileservice/file/download/a/177331/sc" }),
  endpoints: (builder) => ({
    getContacts: builder.query<ContactDto[], void>({
      query() {
        return {
          url: "/190/h/560e0501fa0e19aed9ef169df6095f00.json",
        };
      },
    }),
  }),
});
