const TextInput = ({ label, type, placeholder, register, name, error }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} {...register(name)} placeholder={placeholder} />
      {error && <span>{error.message}</span>}
    </div>
  );
};

export default TextInput;
