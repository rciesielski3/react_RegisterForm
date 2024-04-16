import "./Inputs.module.css";

const FileInput = ({ register, name, errorMessage, handleDataChange }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleDataChange(file);
      register(name);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

export default FileInput;
