import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMessage } from "@/lib/types/IMessage";

interface IState {
  messages: IMessage[] | null;
  fetching: boolean;
}

const initialState: IState = {
  messages: null,
  fetching: false,
};

const chatSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setMessages: (state, action) => {
      if (state.messages && state.messages.length >= action.payload.length) {
        return;
      }
      state.messages = action.payload;
    },
    setFetching: (state, action) => {
      state.fetching = action.payload;
    },
  },
});

export const { setMessages, setFetching } = chatSlice.actions;

export default chatSlice.reducer;
