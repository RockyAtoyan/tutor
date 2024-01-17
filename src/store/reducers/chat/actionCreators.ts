import { createAsyncThunk } from "@reduxjs/toolkit";
import { setFetching, setMessages } from "@/store/reducers/chat/reducer";
import {
  ApiChats,
  getMessagesPayload,
  sendMessagePayload,
} from "@/lib/api/api.chats";

export const getMessages = createAsyncThunk<any, getMessagesPayload>(
  "chat/get",
  async (payload, { dispatch }) => {
    dispatch(setFetching(true));
    try {
      const res = await ApiChats.getChatMessages(payload);
      dispatch(setMessages(res));
    } catch (e) {
      const error = e as Error;
      console.log(error.message);
    }
    dispatch(setFetching(false));
  },
);

export const sendMessage = createAsyncThunk<any, sendMessagePayload>(
  "chat/send",
  async (payload, { dispatch }) => {
    dispatch(setFetching(true));
    try {
      const res = await ApiChats.sendMessage(payload);
      dispatch(getMessages({ authId: payload.authId, id: payload.id }));
    } catch (e) {
      const error = e as Error;
      console.log(error.message);
    }
    dispatch(setFetching(false));
  },
);
