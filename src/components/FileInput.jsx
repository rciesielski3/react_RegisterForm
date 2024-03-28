const FileInput = ({ label, register, name, error }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="file" accept="image/jpeg, image/png" {...register(name)} />
      {error && <span>{error.message}</span>}
    </div>
  );
};

export default FileInput;
