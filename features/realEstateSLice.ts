import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RealEstate } from '@/types/realEstate.types';

interface RealEstateState {
  isFilterOpen: boolean;
  realEstates: RealEstate[];
  filters: {
    region: string | null;
    minPrice: number | null;
    maxPrice: number | null;
    minArea: number | null;
    maxArea: number | null;
    bedrooms: number | null;
  };
}

const initialState: RealEstateState = {
  isFilterOpen: false,
  realEstates: [],
  filters: {
    region: null,
    minPrice: null,
    maxPrice: null,
    minArea: null,
    maxArea: null,
    bedrooms: null,
  },
};

const realEstateSlice = createSlice({
  name: 'realEstate',
  initialState,
  reducers: {
    toggleFilter(state) {
      state.isFilterOpen = !state.isFilterOpen;
    },
    setRealEstates(state, action: PayloadAction<RealEstate[]>) {
      state.realEstates = action.payload;
    },
    setFilters(
      state,
      action: PayloadAction<Partial<RealEstateState['filters']>>
    ) {
      state.filters = { ...state.filters, ...action.payload };
    },
    resetFilters(state) {
      state.filters = initialState.filters;
    },
  },
});

export const { toggleFilter, setRealEstates, setFilters, resetFilters } =
  realEstateSlice.actions;
export default realEstateSlice.reducer;
