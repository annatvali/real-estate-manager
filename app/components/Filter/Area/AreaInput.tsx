interface AreaInputProps {
  value: number | '';
  onChange: (value: number) => void;
  placeholder: string;
}

const AreaInput: React.FC<AreaInputProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      placeholder={placeholder}
      className="h-[42px] w-[155px] rounded-[6px] border p-[2px]"
    />
  );
};

export default AreaInput;
