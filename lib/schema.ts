// DONE REVIEWING: GITHUB COMMIT
import {z} from "zod"

export const signUpSchema = z
  .object({
    email: z.string().email().min(1).max(64),
    password: z.string().min(1).max(64),
    passwordConfirmation: z.string().min(1).max(64)
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    path: ["passwordConfirmation"],
    message: "Passwords do not match"
  })

export const signInSchema = z.object({
  email: z.string().email().min(1).max(64),
  password: z.string().min(1).max(64)
})
