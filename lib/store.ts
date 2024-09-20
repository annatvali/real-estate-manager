import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import realEstateReducer from '../features/realEstateSLice';
import filterSliceReducer from '../features/filterSlice';
import { api } from '../services/apiSlice';

const rootReducer = {
  [api.reducerPath]: api.reducer,
  realEstate: realEstateReducer,
  filter: filterSliceReducer,
};
export const makeStore = (): EnhancedStore => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore);
