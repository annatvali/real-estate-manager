import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  region: string | null;
  minPrice: number | null;
  maxPrice: number | null;
  minArea: number | null;
  maxArea: number | null;
  bedrooms: number | null;
}

const initialState: FilterState = {
  region: null,
  minPrice: null,
  maxPrice: null,
  minArea: null,
  maxArea: null,
  bedrooms: null,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setRegion(state, action: PayloadAction<string | null>) {
      state.region = action.payload;
    },
    setPrice(state, action: PayloadAction<{ min: number; max: number }>) {
      state.minPrice = action.payload.min;
      state.maxPrice = action.payload.max;
    },
    setArea(state, action: PayloadAction<{ min: number; max: number }>) {
      state.minArea = action.payload.min;
      state.maxArea = action.payload.max;
    },
    setBedrooms(state, action: PayloadAction<number | null>) {
      state.bedrooms = action.payload;
    },
    resetFilters(state) {
      state.region = initialState.region;
      state.minPrice = initialState.minPrice;
      state.maxPrice = initialState.maxPrice;
      state.minArea = initialState.minArea;
      state.maxArea = initialState.maxArea;
      state.bedrooms = initialState.bedrooms;
    },
  },
});

export const { setRegion, setPrice, setArea, setBedrooms, resetFilters } =
  filterSlice.actions;
export default filterSlice.reducer;
