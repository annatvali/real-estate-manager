import React from 'react';
import AreaInput from './AreaInput';
import AreaSuggestions from './AreaSuggestions';
import Button from '../../Button';

interface AreaFilterProps {
  minArea: number | '';
  maxArea: number | '';
  setMinArea: (value: number) => void;
  setMaxArea: (value: number) => void;
  onFilter: () => void;
}

const AreaFilter: React.FC<AreaFilterProps> = ({
  minArea,
  maxArea,
  setMinArea,
  setMaxArea,
  onFilter,
}) => {
  const areaSuggestions = [50, 100, 150, 200, 300];

  return (
    <div className="flex flex-col">
      <h3 className="mb-6 mt-[10px] font-medium">ფართობის მიხედვით</h3>
      <div className="mb-4 flex items-center gap-[15px]">
        <AreaInput value={minArea} onChange={setMinArea} placeholder="დან" />
        <AreaInput value={maxArea} onChange={setMaxArea} placeholder="მდე" />
      </div>
      <AreaSuggestions
        suggestions={areaSuggestions}
        onMinAreaClick={(value) => setMinArea(value)}
        onMaxAreaClick={(value) => setMaxArea(value)}
      />
      <Button className="mt-4 self-end" onClick={onFilter}>
        არჩევა
      </Button>
    </div>
  );
};

export default AreaFilter;
