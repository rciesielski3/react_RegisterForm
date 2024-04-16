import "./Inputs.module.css";

const CheckboxInput = ({
  label,
  options,
  register,
  name,
  error,
  selectedOptions,
  toggleSelection,
  selectionMode,
  onChange,
}) => {
  const handleChange = (option) => {
    toggleSelection(option);
    onChange && onChange(option);
  };

  return (
    <div className="checkbox-input">
      <label>{label}</label>
      {options?.map((option) => (
        <div key={option.value}>
          <input
            type={selectionMode}
            id={option.value}
            value={option.value}
            checked={
              selectionMode === "checkbox"
                ? selectedOptions.includes(option.value)
                : selectedOptions === option.value
            }
            onChange={() => handleChange(option.value)}
            {...register(name)}
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxInput;
