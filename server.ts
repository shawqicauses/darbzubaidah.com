// DONE REVIEWING: GITHUB COMMIT - 01
import {inferAsyncReturnType} from "@trpc/server"
import * as trpcExpress from "@trpc/server/adapters/express"
import dotenv from "dotenv"
import express from "express"
import path from "path"
import {appRouter} from "./server/api"
import {nextApplication, nextRequestHandler} from "./server/next"
import initPayload from "./server/payload"

dotenv.config({path: path.resolve(__dirname, ".env")})

const app = express()
const port = process.env.PORT || 3000

const createContext = function createContext({req, res}: trpcExpress.CreateExpressContextOptions) {
  return {req, res}
}

export type ExpressContext = inferAsyncReturnType<typeof createContext>

const start = async function start() {
  const payload = await initPayload({
    initOptions: {
      express: app,
      onInit: async (payloadInitialized) => {
        payloadInitialized.logger.info(`Payload Admin URL ${payloadInitialized.getAdminURL()}`)
      }
    }
  })

  app.use(
    "/api/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext
    })
  )

  app.use((request, response) => nextRequestHandler(request, response))
  nextApplication.prepare().then(() => {
    payload.logger.info("Next.JS Application Is Running...")

    app.listen(port, async () => {
      payload.logger.info(`Next.JS Application URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`)
    })
  })
}

start()
