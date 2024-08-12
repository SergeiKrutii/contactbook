import { apiSlice } from "app/api/apiSlice";

export const contactsApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getContacts: build.query({
      query: () => `contacts?sort=created:desc`,
      tagTypes: ["Contacts"],
      providesTags: ["Contacts"],
    }),
    addContact: build.mutation({
      query: (newContact) => ({
        url: "/contact",
        method: "POST",
        body: {
          record_type: "person",
          privacy: {
            edit: null,
            read: null,
          },
          owner_id: null,
          ...newContact,
        },
      }),
      invalidatesTags: ["Contacts"],
      async onQueryStarted(id, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          console.log(error);
        }
      },
    }),
    deleteContact: build.mutation({
      query: (contactId) => ({
        url: `/contact/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
      async onQueryStarted(id, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          console.log(error);
        }
      },
    }),
    getContactInfo: build.query({
      query: (contactId) => ({
        url: `/contact/${contactId}`,
        method: "GET",
      }),
      invalidatesTags: ["Contacts"],

      async onQueryStarted(id, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          console.log(error);
        }
      },
    }),

    addTags: build.mutation({
      query: ({ id, newTag }) => ({
        url: `/contacts/${id}/tags`,
        method: "PUT",
        body: {
          tags: newTag,
        },
      }),
      invalidatesTags: ["Contacts"],
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData("getContacts", arg.id, (draft) => {
              draft.tags.push(arg.newTag);
            })
          );
        } catch {
          // Обработка ошибок
        }
      },
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useGetContactInfoQuery,
  useAddTagsMutation,
} = contactsApiSlice;
