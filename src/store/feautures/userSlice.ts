import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError, FirebaseErrorCode, getFirebaseMessage } from "../../utils/index";

interface UserState {
  isAuth: boolean;
  email: string;
  error: null | FirebaseError;
  isPendingAuth: boolean;
  creationTime: string;
}

const initialState: UserState = {
  isAuth: false,
  isPendingAuth: false,
  email: "",
  error: null,
  creationTime: "",
};

export const fetchSignUpUser = createAsyncThunk<
  { creationTime: string; userEmail: string },
  { email: string; password: string },
  { rejectValue: FirebaseError }
>("user/fetchSignUpUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const userEmail = userCredential.user.email as string;
    const creationTime = userCredential.user.metadata.creationTime as string;
    return { userEmail, creationTime };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };

    return rejectWithValue(getFirebaseMessage(firebaseError.code));
  }
});

export const fetchSignInUser = createAsyncThunk<
  { userEmail: string; creationTime: string },
  { email: string; password: string },
  { rejectValue: FirebaseError }
>("user/fetchSignInUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userEmail = userCredential.user.email as string;
    const creationTime = userCredential.user.metadata.creationTime as string;

    return { userEmail, creationTime };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };

    return rejectWithValue(getFirebaseMessage(firebaseError.code));
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSignUpUser.pending, (state) => {
      state.isAuth = false;
      state.error = null;
      state.isPendingAuth = true;
    });
    builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
      state.error = null;
      state.email = payload.userEmail;
      state.creationTime = payload.creationTime;
      state.isAuth = true;
      state.isPendingAuth = false;
    });
    builder.addCase(fetchSignUpUser.rejected, (state, { payload }) => {
      if (payload) {
        state.error = payload;
        state.isAuth = false;
        state.isPendingAuth = false;
      }
    });

    builder.addCase(fetchSignInUser.pending, (state) => {
      state.isAuth = false;
      state.error = null;
      state.isPendingAuth = true;
    });
    builder.addCase(fetchSignInUser.fulfilled, (state, { payload }) => {
      state.error = null;
      state.email = payload.userEmail;
      state.creationTime = payload.creationTime;
      state.isPendingAuth = false;
      state.isAuth = true;
    });
    builder.addCase(fetchSignInUser.rejected, (state, { payload }) => {
      if (payload) {
        state.error = payload;
        state.isAuth = false;
        state.isPendingAuth = false;
      }
    });
  },
});

export default userSlice.reducer;
