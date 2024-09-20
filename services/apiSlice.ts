import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Region {
  id: number;
  name: string;
}

interface City {
  id: number;
  name: string;
  region_id: number;
  region: Region;
}

interface RealEstate {
  id: number;
  address: string;
  zip_code: string;
  price: number;
  area: number;
  bedrooms: number;
  is_rental: boolean;
  image: string;
  city_id: number;
  city: City;
}

const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.real-estate-manager.redberryinternship.ge/api',
    prepareHeaders: (headers, { endpoint }) => {
      if (endpoint !== 'getRegions' && endpoint !== 'getCities') {
        headers.set('Authorization', `Bearer ${apiToken}`);
        console.log('Headers:', headers);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getRegions: builder.query<Region[], void>({
      query: () => 'regions',
    }),
    getCities: builder.query<City[], void>({
      query: () => 'cities',
    }),
    getRealEstates: builder.query<RealEstate[], void>({
      query: () => 'real-estates',
    }),
  }),
});

export const { useGetRegionsQuery, useGetCitiesQuery, useGetRealEstatesQuery } =
  api;
