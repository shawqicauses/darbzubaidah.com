// DONE REVIEWING: GITHUB COMMIT - 02
import {z} from "zod"

export const signUpSchema = z
  .object({
    firstName: z.string().min(1).max(64),
    lastName: z.string().min(1).max(64),
    dateOfBirth: z.date(),
    nationality: z.string().min(1).max(64),
    passportNumber: z.coerce.number().min(1),
    email: z.string().email().min(1).max(64),
    password: z.string().min(1).max(64),
    passwordConfirmation: z.string().min(1).max(64)
  })
  .refine((data) => data.nationality !== "select-a-country", {
    path: ["nationality"],
    message: "Please, select a nationality."
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    path: ["passwordConfirmation"],
    message: "Passwords do not match"
  })

export const emailVerificationSchema = z.object({
  token: z.string().min(1)
})

export const signInSchema = z.object({
  email: z.string().email().min(1).max(64),
  password: z.string().min(1).max(64)
})
