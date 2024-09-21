export interface Region {
  id: number;
  name: string;
}

export interface City {
  id: number;
  name: string;
  region_id: number;
  region: Region;
}

export interface Agent {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
  avatar: string;
}
export interface RealEstate {
  id?: number;
  address: string;
  zip_code: string;
  price: number;
  area: number;
  bedrooms: number;
  is_rental?: boolean;
  image: string;
  city_id?: number;
  city: City;
  created_at?: string;
  description?: string;
  agent?: Agent;
}
