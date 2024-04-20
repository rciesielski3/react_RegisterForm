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

  const createCvPreview = file ? URL.createObjectURL(file) : "";

  return (
    <Modal isOpen onRequestClose={closeModal} className="modal-container">
      <h1>Data from the register form</h1>
      <h2>Personal data:</h2>
      <p>
        Name: <span className="formData-context">{formData.firstName}</span>
      </p>
      <p>
        Surname: <span className="formData-context">{formData.lastName}</span>
      </p>
      <p>
        E-mail: <span className="formData-context">{formData.email}</span>
      </p>
      <p>
        Phone: <span className="formData-context">{formData.phone}</span>
      </p>
      <h2>Course preference:</h2>
      <p>
        Learning form:{" "}
        <span className="formData-context">{formData.learningForm}</span>
      </p>
      <p>Preferred technology:</p>
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
        <p>No technology preference</p>
      )}
      {formData.experienceList && formData.experienceList.length > 0 && (
        <>
          <h2>Programming experience:</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Technology </th>
                  <th>Level</th>
                </tr>
              </thead>
              <tbody>
                {formData.experienceList.map((exp, index) => (
                  <tr key={index}>
                    <td>{exp.technology} </td>
                    <td>{exp.experience} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      <h2>Curriculum Vitae:</h2>
      {formData.cvImage ? (
        <img src={createCvPreview} alt="CV" />
      ) : (
        <p>No CV image provided</p>
      )}
      <button className="closeButton" onClick={closeModal}>
        Close
      </button>
    </Modal>
  );
};

export default ModalComponent;
