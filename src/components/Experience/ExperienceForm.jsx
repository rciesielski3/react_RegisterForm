import { experienceYears, preferredTechnology } from "../../assets/data";
import "./Experience.modules.css";

const ExperienceForm = ({
  rowData,
  index,
  handleDeleteRow,
  handleExperienceList,
  errorMessage,
  register,
}) => {
  const handleDeleteClick = (event) => {
    event.preventDefault();
    handleDeleteRow(index);
  };

  const isTechnologySelected = rowData.technology !== "";
  const isExperienceSelected = rowData.experience !== "";

  return (
    <div>
      <select
        value={rowData.technology}
        onChange={(e) =>
          handleExperienceList(index, "technology", e.target.value)
        }
        {...register("technology")}
      >
        <option value="" hidden>
          Wybierz technologię
        </option>
        {preferredTechnology.map((tech, idx) => (
          <option key={idx} value={tech}>
            {tech}
          </option>
        ))}
      </select>
      <select
        value={rowData.experience}
        onChange={(e) =>
          handleExperienceList(index, "experience", e.target.value)
        }
        {...register("experienceYears")}
      >
        <option value="" hidden>
          Wybierz doświadczenie
        </option>
        {experienceYears.map((year, idx) => (
          <option key={idx} value={year}>
            {year}
          </option>
        ))}
      </select>
      {!isTechnologySelected && !isExperienceSelected && errorMessage && (
        <div className="error-message">{errorMessage}</div>
      )}
      <button onClick={handleDeleteClick} className="deleteButton">
        Delete
      </button>
    </div>
  );
};

export default ExperienceForm;
