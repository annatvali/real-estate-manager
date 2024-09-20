import React from 'react';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { resetFilters } from '../../../features/filterSlice';
import Button from '../Button';

const SelectedFilters: React.FC = () => {
  const { region, minPrice, maxPrice, minArea, maxArea, bedrooms } =
    useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const handleReset = (): void => {
    dispatch(resetFilters());
  };

  const filterLabels = [
    region && `რეგიონი: ${region}`,
    minPrice && maxPrice && `ფასი: ${minPrice}₾ - ${maxPrice}₾`,
    minArea && maxArea && `ფართობი: ${minArea}მ² - ${maxArea}მ²`,
    bedrooms && `საძინებლები: ${bedrooms}`,
  ].filter(Boolean);

  return (
    <div className="mb-4">
      {filterLabels.map((label, idx) => (
        <span key={idx} className="mr-2 rounded bg-gray-light px-4 py-2">
          {label}
        </span>
      ))}
      <Button onClick={handleReset}>გაფილტრის გასუფთავება</Button>
    </div>
  );
};

export default SelectedFilters;
