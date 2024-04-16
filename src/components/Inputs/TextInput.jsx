import "./Inputs.module.css";

const TextInput = ({
  placeholder,
  type = "text",
  register,
  name,
  errorMessage,
  updateFormData,
}) => {
  const handleChange = (event) => {
    const { value } = event.target;
    updateFormData(name, value);
  };

  return (
    <div>
      <input
        placeholder={placeholder}
        type={type}
        {...register(name)}
        className={errorMessage ? "error" : ""}
        onChange={handleChange}
      />
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

export default TextInput;
