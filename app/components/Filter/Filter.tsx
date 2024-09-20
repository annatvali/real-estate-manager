'use client';
import CategoryDropdown, { titles } from './CategoryDropdown';

const Filter: React.FC = () => {
  return (
    <div className="flex gap-[24px] rounded-[10px] border border-gray-primary p-[6px]">
      {titles.map((title, index) => (
        <div key={index}>
          <CategoryDropdown title={title} fetchRegions={title === 'რეგიონი'} />
        </div>
      ))}
    </div>
  );
};

export default Filter;
