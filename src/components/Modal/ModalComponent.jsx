import Modal from "react-modal";
import { useState, useEffect } from "react";
import "./Modal.module.css";

const ModalComponent = ({ formData, closeModal }) => {
  const [file, setFile] = useState(null);
  useEffect(() => {
    if (formData.cvImage) {
      setFile(formData.cvImage);
    }
  }, [formData.cvImage]);
  console.log("file", file);

  const createCvPreview = file ? URL.createObjectURL(file) : "";
  console.log("createCvPreview", createCvPreview);

  return (
    <Modal isOpen onRequestClose={closeModal} className="modal-container">
      <h1>Dane z formularza</h1>
      <h2>Dane osobowe:</h2>
      <p>
        Imię: <span className="formData-context">{formData.firstName}</span>
      </p>
      <p>
        Nazwisko: <span className="formData-context">{formData.lastName}</span>
      </p>
      <p>
        Email: <span className="formData-context">{formData.email}</span>
      </p>
      <p>
        Numer telefonu:
        <span className="formData-context">{formData.phone}</span>
      </p>
      <h2>Preferencje kursu:</h2>
      <p>
        Typ kursu:{" "}
        <span className="formData-context">{formData.learningForm}</span>
      </p>
      <p>Preferowane technologie:</p>

      {formData.preferredTechnology &&
      formData.preferredTechnology.length > 0 ? (
        <ul>
          {formData.preferredTechnology.map((tech, index) => (
            <li key={index}>
              <span className="formData-context">{tech}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Brak preferencji technologii</p>
      )}
      {formData.showExperienceButton &&
        formData.experienceList &&
        formData.experienceList.length > 0 && (
          <>
            <h2>Doświadczenie w programowaniu:</h2>
            {formData.experienceList.map((exp, index) => (
              <div key={index}>
                <p>
                  Technologia:
                  <span className="formData-context">{exp.technology}</span> /
                  poziom:
                  <span className="formData-context">{exp.experience}</span>
                </p>
              </div>
            ))}
          </>
        )}
      <h2>Curriculum Vitae:</h2>
      {formData.cvImage ? (
        <img src={createCvPreview} alt="CV" />
      ) : (
        <p>No CV image provided</p>
      )}
      <button className="closeButton" onClick={closeModal}>
        Zamknij
      </button>
    </Modal>
  );
};

export default ModalComponent;
