interface PriceSuggestionsProps {
  suggestions: number[];
  onMinPriceClick: (price: number) => void;
  onMaxPriceClick: (price: number) => void;
}

const PriceSuggestions: React.FC<PriceSuggestionsProps> = ({
  suggestions,
  onMinPriceClick,
  onMaxPriceClick,
}) => {
  return (
    <div className="mt-4 flex justify-between">
      <div className="flex flex-col">
        {suggestions.map((price) => (
          <span key={price} onClick={() => onMinPriceClick(price)}>
            {price.toLocaleString()} ₾
          </span>
        ))}
      </div>
      <div className="flex flex-col">
        {suggestions.map((price) => (
          <span key={price} onClick={() => onMaxPriceClick(price)}>
            {price.toLocaleString()} ₾
          </span>
        ))}
      </div>
    </div>
  );
};

export default PriceSuggestions;
