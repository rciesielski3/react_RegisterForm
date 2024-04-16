import * as z from "zod";

const schema = z
  .object({
    firstName: z.string().min(3, "Imię musi mieć co najmniej 3 znaki"),
    lastName: z.string().min(3, "Nazwisko musi mieć co najmniej 3 znaki"),
    email: z.string().email("Nieprawidłowy format adresu e-mail"),
    phone: z.string().length(9, "Podaj prawidłowy numer telefonu"),
    learningForm: z
      .string()
      .refine((value) => value !== null && value.length > 0, {
        message: "Wybierz formę nauki",
      }),
    preferredTechnology: z
      .array(z.string().nullable())
      .refine(
        (arr) => arr.every((value) => value !== null && value.length > 0),
        {
          message: "Wybierz technologię",
        }
      )
      .optional(),
    hasExperience: z.boolean().optional(),
    cvImage: z
      .object({
        name: z.string(),
        type: z.string(),
      })
      .refine((file) => {
        return (
          file.type === "image/jpeg" ||
          file.type === "image/jpg" ||
          file.type === "image/png"
        );
      }, "Musisz dodać załącznik jako zdjęcie.")
      .refine((file) => {
        return file.name.match(/\.(jpeg|jpg|png)$/i) !== null;
      }, "Nieprawidłowy format pliku. Prześlij obraz w formacie JPEG lub PNG.")
      .optional(),
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
        "Jeśli zaznaczono doświadczenie w programowaniu, musisz wybrać co najmniej jedną preferowaną technologię oraz co najmniej jeden rok doświadczenia.",
    }
  );

export default schema;
