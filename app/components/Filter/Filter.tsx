'use client';
import CategoryDropdown, { titles } from './CategoryDropdown';
import { useState } from 'react';

const Filter: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownClick = (title: string): void => {
    setOpenDropdown((prev) => (prev === title ? null : title));
  };
  return (
    <div className="flex gap-[24px] rounded-[10px] border border-gray-primary p-[6px]">
      {titles.map((title, index) => (
        <div key={index}>
          <CategoryDropdown
            title={title}
            fetchRegions={title === 'რეგიონი'}
            isOpen={openDropdown === title}
            onDropdownClick={() => handleDropdownClick(title)}
          />
        </div>
      ))}
    </div>
  );
};

export default Filter;
