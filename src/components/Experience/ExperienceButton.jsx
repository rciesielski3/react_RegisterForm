import "./Experience.modules.css";

const ExperienceButton = ({
  showExperienceButton,
  handleExperienceChange,
  handleAddExperience,
  clearExperienceList,
  errorMessage,
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
          onChange={handleCheckboxChange}
        />
        Programming experience
      </label>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {showExperienceButton && (
        <div>
          <button onClick={handleClick} className="experienceButton">
            Add experience
          </button>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
      )}
    </div>
  );
};

export default ExperienceButton;
