import React from 'react';
import PriceInput from './PriceInput';
import PriceSuggestions from './PriceSuggestions';
import Button from '../../Button';

interface PriceFilterProps {
  minPrice: number | '';
  maxPrice: number | '';
  setMinPrice: (value: number) => void;
  setMaxPrice: (value: number) => void;
  onFilter: () => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  onFilter,
}) => {
  const priceSuggestions = [50000, 100000, 150000, 200000, 300000];

  return (
    <div className="flex flex-col">
      <h3 className="mb-6 mt-[10px] font-medium">ფასის მიხედვით</h3>
      <div className="mb-4 flex items-center gap-[15px]">
        <PriceInput value={minPrice} onChange={setMinPrice} placeholder="დან" />
        <PriceInput value={maxPrice} onChange={setMaxPrice} placeholder="მდე" />
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => {
            setMinPrice(50000);
            setMaxPrice(300000);
          }}
          className="text-blue-500"
        >
          მინ. ფასი
        </button>
        <button
          onClick={() => {
            setMinPrice(50000);
            setMaxPrice(300000);
          }}
          className="text-blue-500"
        >
          მაქს. ფასი
        </button>
      </div>
      <PriceSuggestions
        suggestions={priceSuggestions}
        onMinPriceClick={setMinPrice}
        onMaxPriceClick={setMaxPrice}
      />
      <Button className="mt-4 self-end" onClick={onFilter}>
        არჩევა
      </Button>
    </div>
  );
};

export default PriceFilter;
