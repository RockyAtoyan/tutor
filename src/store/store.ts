import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import serviceSlice from "@/store/reducers/service/reducer";
import chatSlice from "@/store/reducers/chat/reducer";

const rootReducer = combineReducers({
  service: serviceSlice,
  chat: chatSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type StateType = ReturnType<typeof rootReducer>;
