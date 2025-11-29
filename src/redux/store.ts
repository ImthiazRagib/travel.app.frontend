import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import authReducer from "./features/auth/authSlice";
import flightFilters from "./features/flights/flight.filters.slice";

/**
 * configureStore
 * - add reducers here
 * - enable devTools in non-production
 */
export const store = configureStore({
  reducer: {
    auth: authReducer,
    flightFilters: flightFilters
  },
  devTools: import.meta.env.MODE !== "production",
});

// ---- Type helpers for use throughout the app ----
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed hooks for use in components (preferred)
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
