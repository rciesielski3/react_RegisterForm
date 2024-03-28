const CheckboxInput = ({ label, register, name }) => {
  return (
    <div>
      <input type="checkbox" {...register(name)} />
      <label>{label}</label>
    </div>
  );
};

export default CheckboxInput;
