import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://live.devnimble.com/api/v1/";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = "VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn";
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  // refetchOnFocus: true,
  tagTypes: ["Contacts", "Tags"],
  endpoints: (builder) => ({}),
});
