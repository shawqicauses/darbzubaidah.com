// DONE REVIEWING: GITHUB COMMIT - 01
import dotenv from "dotenv"
import nodemailer from "nodemailer"
import path from "path"
import payload, {type Payload} from "payload"
import type {InitOptions} from "payload/config"

dotenv.config({path: path.resolve(__dirname, "../.env")})

const transport = nodemailer.createTransport({
  host: "smtp.resend.com",
  port: 465,
  secure: true,
  auth: {
    user: "resend",
    pass: process.env.RESEND_API_KEY
  }
})

let cached = (global as any).payload
if (!cached) cached = (global as any).payload = {client: null, promise: null}

interface Params {
  initOptions?: Partial<InitOptions>
}

const initPayload = async function initPayload({initOptions}: Params = {}): Promise<Payload> {
  if (!process.env.PAYLOAD_SECRET)
    throw new Error("Error: Could not find `PAYLOAD_SECRET` in your `.env` file.")

  if (cached.client) return cached.client

  if (!cached.promise)
    cached.promise = payload.init({
      secret: process.env.PAYLOAD_SECRET,
      local: !initOptions?.express,
      email: {transport, fromAddress: "onboarding@resend.dev", fromName: "Dar Abu Zubaidah"},
      ...(initOptions || {})
    })

  try {
    cached.client = await cached.promise
  } catch (error: unknown) {
    cached.promise = null
    throw error
  }

  return cached.client
}

export default initPayload
