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
    getValues,
  } = useForm({
    resolver: zodResolver(schema),
  });
  const [showExperienceButton, setShowExperienceButton] = useState(false);
  const [experienceList, setExperienceList] = useState([]);
  const [formData, setFormData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = (formData) => {
    setIsModalOpen(true);
    console.log("handleFormSubmit Form Data:", formData);
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
    handleDataChange("experienceList", experienceList);
    const hasExperience = newList.length > 0;
    handleDataChange("hasExperience", hasExperience);
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
        <h2>Personal data:</h2>
        <TextInput
          placeholder="Name"
          register={register}
          name="firstName"
          errorMessage={errors?.firstName?.message}
        />
        <TextInput
          placeholder="Surname"
          register={register}
          name="lastName"
          errorMessage={errors?.lastName?.message}
        />
        <TextInput
          placeholder="E-mail address"
          type="email"
          register={register}
          name="email"
          errorMessage={errors?.email?.message}
        />
        <TextInput
          placeholder="Phone number"
          type="number"
          register={register}
          name="phone"
          errorMessage={errors?.phone?.message}
        />
        <LearningForm
          formData={formData}
          setFormData={setFormData}
          learningFormErrorMessage={errors?.learningForm?.message}
          preferredTechnologyErrorMessage={errors?.preferredTechnology?.message}
          register={register}
        />

        <ExperienceButton
          showExperienceButton={showExperienceButton}
          handleExperienceChange={handleExperienceChange}
          handleAddExperience={handleAddExperience}
          clearExperienceList={clearExperienceList}
          errorMessage={errors?.hasExperience?.message}
          register={register}
        />
        {experienceList.map((exp, index) => (
          <ExperienceForm
            key={index}
            index={index}
            rowData={exp}
            handleDeleteRow={handleDeleteRow}
            handleExperienceList={handleExperienceList}
          />
        ))}
        <h2>Add CV:</h2>
        <FileInput
          name="cvImage"
          errorMessage={errors?.cvImage?.message}
          handleDataChange={handleDataChange}
          register={register}
        />

        <button type="submit">Send</button>
      </form>
      {isModalOpen && (
        <ModalComponent formData={getValues()} closeModal={closeModal} />
      )}
    </div>
  );
};

export default RegisterForm;
