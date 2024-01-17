import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  navCollapse: boolean;
  error: null | string;
  message: null | string;
}

const initialState: IState = {
  navCollapse: true,
  error: null,
  message: null,
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setMenuCollapse: (state, action: PayloadAction<boolean>) => {
      state.navCollapse = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { setMenuCollapse, setError, setMessage } = serviceSlice.actions;

export default serviceSlice.reducer;
