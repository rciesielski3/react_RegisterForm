import "./Experience.modules.css";

const ExperienceButton = ({
  showExperienceButton,
  handleExperienceChange,
  handleAddExperience,
  clearExperienceList,
  errorMessage,
  register,
}) => {
  const handleClick = (event) => {
    event.preventDefault();
    handleAddExperience();
  };

  const handleCheckboxChange = (event) => {
    handleExperienceChange(event);
    if (!event.target.checked) {
      clearExperienceList();
    }
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={showExperienceButton}
          {...register("hasExperience")}
          onChange={handleCheckboxChange}
        />
        Programming experience
      </label>
      {showExperienceButton && (
        <div>
          <button onClick={handleClick} className="experienceButton">
            Add experience
          </button>
        </div>
      )}
      {showExperienceButton && errorMessage && (
        <div className="error-message">{errorMessage}</div>
      )}
    </div>
  );
};

export default ExperienceButton;
