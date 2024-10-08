// DONE REVIEWING: GITHUB COMMIT - 01
import {TRPCError} from "@trpc/server"
import {emailVerificationSchema, signInSchema, signUpSchema} from "../../../lib/schema"
import initPayload from "../../payload"
import {procedure, router} from "../trpc"

const authRouter = router({
  signUp: procedure.input(signUpSchema).mutation(async ({input}) => {
    const {firstName, lastName, dateOfBirth, nationality, passportNumber, email, password} = input

    const payload = await initPayload()

    // check if user already exists
    const {docs} = await payload.find({
      collection: "users",
      where: {
        email: {
          equals: email
        }
      }
    })

    // if user exists throw an error
    if (docs.length !== 0) throw new TRPCError({code: "CONFLICT"})

    try {
      await payload.create({
        collection: "users",
        data: {
          first_name: firstName,
          last_name: lastName,
          date_of_birth: dateOfBirth,
          nationality,
          passport_number: passportNumber,
          email,
          password,
          role: "user"
        }
      })
    } catch (error) {
      throw new TRPCError({code: "INTERNAL_SERVER_ERROR"})
    }

    return {success: true, emailVerificationSentTo: email}
  }),
  emailVerification: procedure.input(emailVerificationSchema).query(async ({input}) => {
    const {token} = input

    const payload = await initPayload()

    const isVerified = await payload.verifyEmail({collection: "users", token})

    if (!isVerified) throw new TRPCError({code: "UNAUTHORIZED"})

    return {success: true}
  }),
  signIn: procedure.input(signInSchema).mutation(async ({input, ctx}) => {
    const {email, password} = input
    const {res} = ctx

    const payload = await initPayload()

    try {
      await payload.login({
        collection: "users",
        data: {
          email,
          password
        },
        res
      })
    } catch (error) {
      throw new TRPCError({code: "UNAUTHORIZED"})
    }

    return {success: true}
  })
})

export default authRouter
