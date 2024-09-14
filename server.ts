// DONE REVIEWING: GITHUB COMMIT
import dotenv from "dotenv"
import path from "path"
import express from "express"
import initPayload from "./server/payload"
import {nextApplication, nextRequestHandler} from "./server/next"

dotenv.config({path: path.resolve(__dirname, ".env")})

const app = express()
const port = process.env.PORT || 3000

const start = async function start() {
  const payload = await initPayload({
    initOptions: {
      express: app,
      onInit: async (payloadInitialized) => {
        payloadInitialized.logger.info(`Payload Admin URL ${payloadInitialized.getAdminURL()}`)
      }
    }
  })

  app.use((request, response) => nextRequestHandler(request, response))
  nextApplication.prepare().then(() => {
    payload.logger.info("Next.JS Application Is Running...")

    app.listen(port, async () => {
      payload.logger.info(`Next.JS Application URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`)
    })
  })
}

start()
