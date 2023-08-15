import { createSlice, nanoid } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "notes",
  initialState: {
    note: [],
  },
  reducers: {
    add: (state, actions) => {
      state.note.push(actions.payload);
    },
    remove: (state, actions) => {
      const id = actions.payload;
      const filtered = state.note.filter((f) => f.id !== id);
      state.note = filtered;
    },
    edit: (state, actions) => {
      const { id, text } = actions.payload;
      let not = state.note.find((n) => n.id === id);
      not.text = text;
    },
  },
});

export const { add, remove, edit } = noteSlice.actions;

export default noteSlice.reducer;
