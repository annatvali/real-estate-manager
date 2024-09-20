import React from 'react';
import Button from '../../Button';

interface Region {
  id: number;
  name: string;
}

interface RegionFilterProps {
  regions: Region[];
}

const RegionFilter: React.FC<RegionFilterProps> = ({ regions }) => {
  return (
    <div className="mt-[10px] flex w-full max-w-[90%] flex-col gap-6 rounded-[10px] md:max-w-[700px]">
      <div>
        <h3 className="mb-6 font-medium">რეგიონის მიხედვით</h3>
        <div className="grid grid-cols-1 gap-[50px] gap-y-4 sm:grid-cols-2 md:grid-cols-[max-content_max-content_max-content]">
          {regions.map((region) => (
            <label key={region.id} className="flex items-center gap-[8px]">
              <input type="checkbox" className="h-[20px] w-[20px]" />
              <span className="text-nowrap text-sm">{region.name}</span>
            </label>
          ))}
        </div>
      </div>
      <Button className="mt-4 self-end">არჩევა</Button>
    </div>
  );
};

export default RegionFilter;
