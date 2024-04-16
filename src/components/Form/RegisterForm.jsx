import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import schema from "../ZodSchema";
import TextInput from "../Inputs/TextInput";
import FileInput from "../Inputs/FileInput";
import LearningForm from "./LearningForm";
import ExperienceButton from "../Experience/ExperienceButton";
import ExperienceForm from "../Experience/ExperienceForm";
import ModalComponent from "../Modal/ModalComponent";
import "./Form.modules.css";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const [showExperienceButton, setShowExperienceButton] = useState(false);
  const [experienceList, setExperienceList] = useState([]);
  const [formData, setFormData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log("formData", formData);
  console.log("(Object.keys(errors)", Object.keys(errors));

  const handleFormSubmit = (formData) => {
    // setFormData(formData);

    // Check if there are any validation errors
    if (Object.keys(errors).length === 0) {
      setIsModalOpen(true);
    }
  };

  const handleExperienceChange = (event) => {
    setShowExperienceButton(event.target.checked);
  };

  const handleAddExperience = () => {
    setExperienceList([...experienceList, { technology: "", experience: "" }]);
  };

  const handleDeleteRow = (index) => {
    const newList = [...experienceList];
    newList.splice(index, 1);
    setExperienceList(newList);
  };

  const handleExperienceList = (index, key, value) => {
    const newList = [...experienceList];
    newList[index][key] = value;
    setExperienceList(newList);
  };
  const handleDataChange = (name, value) => {
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const clearExperienceList = () => {
    setExperienceList([]);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <h2>Dane osobowe:</h2>
        <TextInput
          placeholder="Imię"
          register={register}
          name="firstName"
          errorMessage={errors?.firstName?.message}
          updateFormData={handleDataChange}
        />
        <TextInput
          placeholder="Nazwisko"
          register={register}
          name="lastName"
          errorMessage={errors?.lastName?.message}
          updateFormData={handleDataChange}
        />
        <TextInput
          placeholder="Adres email"
          type="email"
          register={register}
          name="email"
          errorMessage={errors?.email?.message}
          updateFormData={handleDataChange}
        />
        <TextInput
          placeholder="Numer telefonu"
          type="number"
          register={register}
          name="phone"
          errorMessage={errors?.phone?.message}
          updateFormData={handleDataChange}
        />
        <LearningForm
          formData={formData}
          setFormData={setFormData}
          learningFormErrorMessage={errors?.learningForm?.message}
          preferredTechnologyErrorMessage={errors?.preferredTechnology?.message}
          registerLearningForm={register}
          registerTechnology={register}
        />

        <ExperienceButton
          showExperienceButton={showExperienceButton}
          handleExperienceChange={handleExperienceChange}
          handleAddExperience={handleAddExperience}
          clearExperienceList={clearExperienceList}
        />
        {experienceList.map((exp, index) => (
          <ExperienceForm
            key={index}
            index={index}
            rowData={exp}
            handleDeleteRow={handleDeleteRow}
            handleExperienceList={handleExperienceList}
            errorMessage={errors?.preferredTechnology?.message}
            register={register}
          />
        ))}
        <h2>Dodaj swoje CV:</h2>
        <FileInput
          name="cvImage"
          errorMessage={errors?.cvImage?.message}
          handleDataChange={(file) => handleDataChange("cvImage", file)}
          register={register}
        />

        <button type="submit">Wyślij</button>
      </form>
      {isModalOpen && (
        <ModalComponent formData={formData} closeModal={closeModal} />
      )}
    </div>
  );
};

export default RegisterForm;
