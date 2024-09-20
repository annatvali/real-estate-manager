'use client';

import { useState } from 'react';
import clsx from 'clsx';
import RegionFilter from './Region/RegionFilter';
import PriceFilter from './Price/PriceFilter';
import AreaFilter from './Area/AreaFilter';
import BedroomsFilter from './Bedrooms/BedroomsFilter';
import { useGetRegionsQuery } from '../../../services/apiSlice';

export const titles = [
  'რეგიონი',
  'საფასო კატეგორია',
  'ფართობი',
  'საძინებლების რაოდენობა',
];

interface CategoryDropdownProps {
  title: string;
  fetchRegions?: boolean;
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({
  title,
  fetchRegions = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');
  const [minArea, setMinArea] = useState<number | ''>('');
  const [maxArea, setMaxArea] = useState<number | ''>('');
  const [bedrooms, setBedrooms] = useState<number | null>(0);

  const handleFilter = (): void => {
    console.log('filtering logic goes here');
  };

  const {
    data: regions = [],
    error,
    isLoading,
  } = useGetRegionsQuery(undefined, { skip: !fetchRegions });

  return (
    <div className="relative w-full font-firago text-black-primary">
      <div>
        <button
          className={clsx(
            'flex w-full items-center gap-[4px] truncate whitespace-nowrap rounded-md px-[14px] py-[8px] transition-colors duration-300',
            { 'bg-gray-light': isOpen }
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-base font-medium">{title}</span>
          <span
            className={clsx(
              'icon-[ci--chevron-down] h-[14px] w-[14px] transition-transform duration-300',
              { 'icon-[ci--chevron-up]': isOpen }
            )}
          ></span>
        </button>
      </div>
      {isOpen && (
        <div className="absolute left-[-7px] z-10 mt-[16px] rounded-[10px] border border-gray-primary bg-white p-8">
          {title === 'რეგიონი' && !isLoading && !error && (
            <RegionFilter regions={regions} />
          )}
          {title === 'საფასო კატეგორია' && (
            <PriceFilter
              minPrice={minPrice}
              maxPrice={maxPrice}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
              onFilter={handleFilter}
            />
          )}
          {title === 'ფართობი' && (
            <AreaFilter
              minArea={minArea}
              maxArea={maxArea}
              setMinArea={setMinArea}
              setMaxArea={setMaxArea}
              onFilter={handleFilter}
            />
          )}
          {title === 'საძინებლების რაოდენობა' && (
            <BedroomsFilter
              bedrooms={bedrooms}
              setBedrooms={setBedrooms}
              onFilter={handleFilter}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
