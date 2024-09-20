import React from 'react';
import Button from '@/app/components/Button';

interface BedroomsFilterProps {
  bedrooms: number | null;
  setBedrooms: (value: number | null) => void;
  onFilter: () => void;
}

const BedroomsFilter: React.FC<BedroomsFilterProps> = ({
  bedrooms,
  setBedrooms,
  onFilter,
}) => {
  const bedroomOptions = [1, 2, 3, 4];

  return (
    <div className="flex flex-col">
      <h3 className="mb-6 mt-[10px] font-medium">საძინებლების რაოდენობა</h3>
      <div className="mb-4 flex gap-4">
        {bedroomOptions.map((option) => (
          <button
            key={option}
            onClick={() => setBedrooms(option)}
            className={`h-[42px] w-[42px] rounded-[10px] border border-gray-primary px-[10px] ${bedrooms === option ? 'border-green-primary bg-green-primary text-white' : 'bg-white text-black-primary-50'}`}
            aria-pressed={bedrooms === option}
          >
            {option}
          </button>
        ))}
      </div>
      <Button className="mt-4 self-end" onClick={onFilter}>
        არჩევა
      </Button>
    </div>
  );
};

export default BedroomsFilter;
