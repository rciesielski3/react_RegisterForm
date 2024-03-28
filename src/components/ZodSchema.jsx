import * as z from "zod";

const schema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.string().email(),
  phoneNumber: z.string().length(9),
  learningForm: z.string().min(1),
  preferredTechnologies: z.array(z.string()).min(1),
  cvImage: z.string().refine(
    (value) => {
      const allowedExtensions = ["jpg", "jpeg", "png"];
      const extension = value.split(".").pop();
      return allowedExtensions.includes(extension.toLowerCase());
    },
    {
      message: "Invalid file format. Please upload a JPEG or PNG image.",
    }
  ),
  programmingExperience: z.object({
    hasExperience: z.boolean(),
    technologies: z
      .array(
        z.object({
          technology: z.string(),
          proficiency: z.string(),
        })
      )
      .min(1)
      .optional(),
  }),
});

export default schema;
