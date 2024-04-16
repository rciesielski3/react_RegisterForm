import { learningForms, preferredTechnology } from "../../assets/data.js";
import "./Form.modules.css";

const LearningForm = ({
  formData,
  setFormData,
  learningFormErrorMessage,
  preferredTechnologyErrorMessage,
  registerLearningForm,
  registerTechnology,
}) => {
  return (
    <>
      <div>
        <h2>Wybierz formę nauki:</h2>
        {learningForms.map((form) => (
          <label key={form} {...registerLearningForm("learningForm")}>
            <input
              type="radio"
              name="learningForm"
              value={form}
              checked={formData.learningForm === form}
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
        {/* Display error message if the field is empty and there's an error message */}
        {learningFormErrorMessage && !formData.learningForm && (
          <div className="error-message">{learningFormErrorMessage}</div>
        )}
      </div>
      <div>
        <h2>Wybierz preferowane technologie:</h2>
        <select
          multiple
          size={preferredTechnology ? preferredTechnology.length : 0}
          value={formData.preferredTechnology}
          onChange={(e) => {
            setFormData({
              ...formData,
              preferredTechnology: Array.from(
                e.target.selectedOptions,
                (option) => option.value
              ),
            });
            registerTechnology("preferredTechnology");
          }}
          // Register the preferredTechnology field
          // {...registerTechnology("preferredTechnology")(e)}
        >
          {preferredTechnology.map((tech) => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </select>
        {/* Display error message if the field is empty and there's an error message */}
        {preferredTechnologyErrorMessage && !formData.preferredTechnology && (
          <div className="error-message">{preferredTechnologyErrorMessage}</div>
        )}
      </div>
    </>
  );
};

export default LearningForm;
