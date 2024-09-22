import React, { useRef } from 'react';
import { useGetRealEstatesByRegionQuery } from '@/services/apiSlice';
import Card from '@/app/components/RealEstates/Card';
import { RealEstate } from '@/types/realEstate.types';
import Loading from '../Loading/Loading';

interface CarouselProps {
  region: string;
}

const Carousel: React.FC<CarouselProps> = ({ region }) => {
  const {
    data: realEstates,
    error,
    isLoading,
  } = useGetRealEstatesByRegionQuery(region);

  const carouselRef = useRef<HTMLDivElement>(null);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p className="text-red-500">Failed to load real estates.</p>;
  }

  const realEstatesToDisplay = realEstates?.length
    ? realEstates
    : Array(4).fill(realEstates[0]);

  const scrollLeft = (): void => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = (): void => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative">
      <h2 className="mb-4 text-4xl font-medium text-black-primary">
        ბინები მსგავს ლოკაციაზე
      </h2>
      <div className="relative flex items-center justify-around">
        <span
          className="top-50% icon-[lucide--arrow-left] absolute left-[-65px] h-10 w-10 cursor-pointer text-black-primary"
          onClick={scrollLeft}
        ></span>
        <div
          className="w-4xl flex w-full space-x-4 overflow-x-auto"
          ref={carouselRef}
        >
          {realEstatesToDisplay.map((realEstate: RealEstate, index: number) => (
            <div key={index} className="flex-none basis-1/4">
              <Card {...realEstate} />
            </div>
          ))}
        </div>
        <span
          className="top-50% icon-[lucide--arrow-left] absolute right-[-65px] h-10 w-10 rotate-180 cursor-pointer text-black-primary"
          onClick={scrollRight}
        ></span>
      </div>
    </section>
  );
};

export default Carousel;
