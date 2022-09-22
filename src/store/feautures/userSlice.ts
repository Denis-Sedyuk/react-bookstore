import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  isAuth: false;
  id: null | string;
  name: null;
  email: null | String;
  password: null;
}

const initialState: UserState = {
  isAuth: false,
  id: null,
  name: null,
  email: null,
  password: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    generateRandomId(state) {
      state.id = nanoid();
    },

    setEmail(state, { payload }: PayloadAction<string>) {
      state.email = payload;
    },
  },
});

export default userSlice.reducer;

export const { generateRandomId, setEmail } = userSlice.actions;
