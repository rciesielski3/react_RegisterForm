import { useState } from "react";
import SelectInput from "./SelectInput";
import { technologies } from "../assets/data";
import { learningForms } from "../assets/data";

const CoursePreferences = ({ register, error }) => {
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  const handleTechnologyChange = (e) => {
    const selectedValues = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedTechnologies(selectedValues);
  };

  return (
    <div>
      <label>Forma nauki:</label>
      <SelectInput
        register={register}
        name="learningForm"
        options={learningForms.map((form) => ({ value: form, label: form }))}
        error={error?.message}
      />
      <label>Preferowane technologie:</label>
      <select
        {...register("preferredTechnologies")}
        multiple
        onChange={handleTechnologyChange}
        value={selectedTechnologies}
      >
        {technologies.map((technology) => (
          <option key={technology} value={technology}>
            {technology}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CoursePreferences;
