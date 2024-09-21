interface AreaSuggestionsProps {
  suggestions: number[];
  onMinAreaClick: (price: number) => void;
  onMaxAreaClick: (price: number) => void;
}

const AreaSuggestions: React.FC<AreaSuggestionsProps> = ({
  suggestions,
  onMinAreaClick,
  onMaxAreaClick,
}) => {
  return (
    <div className="mt-4 grid grid-cols-[1fr_max-content]">
      <div className="flex flex-col">
        {suggestions.map((price) => (
          <span
            className="cursor-pointer"
            key={price}
            onClick={() => onMinAreaClick(price)}
          >
            {price.toLocaleString()} მ²
          </span>
        ))}
      </div>
      <div className="flex flex-col">
        {suggestions.map((price) => (
          <span
            className="cursor-pointer"
            key={price}
            onClick={() => onMaxAreaClick(price)}
          >
            {price.toLocaleString()} მ²
          </span>
        ))}
      </div>
    </div>
  );
};

export default AreaSuggestions;
