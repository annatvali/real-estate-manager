import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Region, City, RealEstate } from '@/types/realEstate.types';

const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.real-estate-manager.redberryinternship.ge/api',
    prepareHeaders: (headers, { endpoint }) => {
      if (endpoint !== 'getRegions' && endpoint !== 'getCities') {
        headers.set('Authorization', `Bearer ${apiToken}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getRegions: builder.query<Region[], void>({
      query: () => 'regions',
    }),
    getRealEstatesByRegion: builder.query({
      query: (region) => `real-estates?region=${region}`,
    }),
    getCities: builder.query<City[], void>({
      query: () => 'cities',
    }),
    getRealEstates: builder.query<RealEstate[], void>({
      query: () => 'real-estates',
    }),
    getRealEstateById: builder.query<RealEstate, number>({
      query: (id) => `real-estates/${id}`,
    }),
    deleteRealEstateById: builder.mutation<void, number>({
      query: (id) => ({
        url: `real-estates/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetRegionsQuery,
  useGetRealEstatesByRegionQuery,
  useGetCitiesQuery,
  useGetRealEstatesQuery,
  useGetRealEstateByIdQuery,
  useDeleteRealEstateByIdMutation,
} = api;
