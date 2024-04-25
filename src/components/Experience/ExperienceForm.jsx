import { experienceYears, preferredTechnology } from "../../assets/data";
import "./Experience.modules.css";

const ExperienceForm = ({
  index,
  rowData,
  register,
  handleDeleteRow,
  handleExperienceList,
}) => {
  const handleDeleteClick = (event) => {
    event.preventDefault();
    handleDeleteRow(index);
  };

  return (
    <div>
      <select
        value={rowData.technology}
        {...register(`technology-${index}`)}
        onChange={(e) =>
          handleExperienceList(index, "technology", e.target.value)
        }
        name={`technology-${index}`}
      >
        <option value="" hidden>
          Choose technology
        </option>
        {preferredTechnology.map((tech, idx) => (
          <option key={idx} value={tech}>
            {tech}
          </option>
        ))}
      </select>
      <select
        value={rowData.experience}
        {...register(`experienceYears-${index}`)}
        onChange={(e) =>
          handleExperienceList(index, "experience", e.target.value)
        }
        name={`experienceYears-${index}`}
      >
        <option value="" hidden>
          Choose an experience
        </option>
        {experienceYears.map((year, idx) => (
          <option key={idx} value={year}>
            {year}
          </option>
        ))}
      </select>
      <button onClick={handleDeleteClick} className="deleteButton">
        Delete
      </button>
    </div>
  );
};

export default ExperienceForm;
