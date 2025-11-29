import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/**
 * AuthState
 * - user: basic profile (avoid storing sensitive tokens here)
 * - status: idle | loading | authenticated | failed
 */
interface User {
  id: string;
  name: string;
  email: string;
  provider?: string;
}

interface AuthState {
  user: User | null;
  status: "idle" | "loading" | "authenticated" | "failed";
  error?: string | null;
}

const initialState: AuthState = {
  user: null,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // set user after login
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.status = "authenticated";
      state.error = null;
    },
    // clear user on logout
    clearUser(state) {
      state.user = null;
      state.status = "idle";
      state.error = null;
    },
    // status handlers for async flows
    setLoading(state) {
      state.status = "loading";
      state.error = null;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { setUser, clearUser, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;
