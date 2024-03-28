const SelectInput = ({ label, options, register, name, error }) => {
  return (
    <div>
      <label>{label}</label>
      <select {...register(name)} multiple defaultValue={[]}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span>{error.message}</span>}
    </div>
  );
};

export default SelectInput;
