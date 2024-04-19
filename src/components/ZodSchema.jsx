import * as z from "zod";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const schema = z
  .object({
    firstName: z.string().min(3, "Name must contain at least 3 characters"),
    lastName: z.string().min(3, "Last name must contain at least 3 characters"),
    email: z.string().email("Provide correct e-mail"),
    phone: z.string().length(9, "Provide correct phone number"),
    learningForm: z
      .string()
      .nullable()
      .refine((value) => value !== null && value.length > 0, {
        message: "Select learning form!",
      }),
    preferredTechnology: z
      .array(z.string())
      .min(1, { message: "Select at least 1 technology." }),
    hasExperience: z.boolean().optional(),
    cvImage: z
      .any()
      .refine((file) => file?.length >= 1, { message: "Image is required." })
      .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.[0]?.type), {
        message: ".jpg, .jpeg, .png and .webp files are accepted.",
      }),
    programmingExperience: z
      .object({
        technology: z.string(),
        proficiency: z.string(),
      })
      .optional(),
    experienceList: z
      .array(
        z.object({
          technology: z.string(),
          experience: z.string(),
        })
      )
      .optional(),
    experienceYears: z.array(z.string()).optional(),
  })
  .refine(
    (data) => {
      if (data.hasExperience) {
        if (
          !data.preferredTechnology ||
          data.preferredTechnology.length === 0 ||
          !data.experienceYears ||
          data.experienceYears.length === 0
        ) {
          return false;
        }
      }
      return true;
    },
    {
      message:
        "If programming experience is selected, you must select at least one preferred technology and at least one year of experience.",
    }
  );

export default schema;
