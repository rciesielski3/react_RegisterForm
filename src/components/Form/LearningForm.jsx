import { learningForms, preferredTechnology } from "../../assets/data.js";
import "./Form.modules.css";

const LearningForm = ({
  formData,
  setFormData,
  learningFormErrorMessage,
  preferredTechnologyErrorMessage,
  register,
}) => {
  return (
    <>
      <div>
        <h2>Choose a form of learning:</h2>
        {learningForms.map((form) => (
          <label key={form}>
            <input
              type="radio"
              name="learningForm"
              value={form}
              checked={formData.learningForm === form}
              {...register("learningForm")}
              onChange={(e) => {
                const value = e.target.value;
                setFormData({
                  ...formData,
                  learningForm: value,
                });
              }}
            />
            {form}
          </label>
        ))}

        {learningFormErrorMessage && (
          <div className="error-message">{learningFormErrorMessage}</div>
        )}
      </div>
      <div>
        <h2>Choose preferred technologies:</h2>
        <select
          multiple
          size={preferredTechnology ? preferredTechnology.length : 0}
          value={formData.preferredTechnology}
          {...register("preferredTechnology")}
          onChange={(e) => {
            setFormData({
              ...formData,
              preferredTechnology: Array.from(
                e.target.selectedOptions,
                (option) => option.value
              ),
            });
          }}
        >
          {preferredTechnology.map((tech) => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </select>
        {preferredTechnologyErrorMessage && (
          <div className="error-message">{preferredTechnologyErrorMessage}</div>
        )}
      </div>
    </>
  );
};

export default LearningForm;
