import "./Inputs.module.css";

const TextInput = ({
  placeholder,
  type = "text",
  register,
  name,
  errorMessage,
}) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={type}
        {...register(name)}
        className={errorMessage ? "error" : ""}
      />
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

export default TextInput;
