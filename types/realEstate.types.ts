export interface RealEstate {
  id: number;
  image: string;
  price: number;
  city: {
    name: string;
  };
  address: string;
  bedrooms: number;
  area: number;
  zipCode: string;
  isRental: boolean;
}
