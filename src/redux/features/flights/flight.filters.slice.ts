import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface FlightFiltersState {
  airlines: string[];
  stops: string;
  maxPrice: number;
  departureTime: string;
  // add other filters (amenities, rating, cabinClass, etc.)
}

const initialState: FlightFiltersState = {
  airlines: ["all"],
  stops: "nonstop",
  maxPrice: 2000,
  departureTime: "2025-03-02T14:00:00Z",
};

const flightFiltersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFlightFilters(state, action: PayloadAction<Partial<FlightFiltersState>>) {
      return { ...state, ...action.payload };
    },
    resetFlightFilters() {
      return initialState;
    },
  },
});

export const { setFlightFilters, resetFlightFilters } = flightFiltersSlice.actions;
export default flightFiltersSlice.reducer;
