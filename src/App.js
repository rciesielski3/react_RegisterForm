import { useForm } from "react-hook-form";
import schema from "./components/ZodSchema";
import TextInput from "./components/TextInput";
import CoursePreferences from "./components/CoursePreferences";
import CheckboxInput from "./components/CheckboxInput";
import FileInput from "./components/FileInput";
import SelectInput from "./components/SelectInput";

const RegisterForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: async (data) => {
      try {
        await schema.validate(data);
        return {
          values: data,
          errors: {},
        };
      } catch (validationError) {
        return {
          values: {},
          errors: validationError.errors.reduce((acc, error) => {
            return { ...acc, [error.path[0]]: { message: error.message } };
          }, {}),
        };
      }
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label="First Name"
        register={register}
        name="firstName"
        error={errors.firstName}
      />
      <TextInput
        label="Last Name"
        register={register}
        name="lastName"
        error={errors.lastName}
      />
      <TextInput
        label="Email"
        type="email"
        register={register}
        name="email"
        error={errors.email}
      />
      <TextInput
        label="Phone"
        type="number"
        register={register}
        name="phone"
        error={errors.phone}
      />
      <CoursePreferences
        register={register}
        error={errors.preferredTechnologies}
      />
      <CheckboxInput
        label="Programming Experience"
        register={register}
        name="programmingExperience"
        error={errors.programmingExperience}
      />
      <FileInput
        label="Upload CV"
        register={register}
        name="cv"
        error={errors.cv}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegisterForm;
