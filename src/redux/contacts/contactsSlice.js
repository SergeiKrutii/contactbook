import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts: (state, { payload }) => {
      console.log("🚀 ~ payload:", payload);
      state.contacts = payload;
    },

    clearContactsState: (state, { payload }) => {
      return initialState;
    },
  },
});

export const { setContacts, clearContactsState } = contactsSlice.actions;

export default contactsSlice.reducer;
