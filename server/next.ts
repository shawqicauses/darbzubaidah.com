// DONE REVIEWING: GITHUB COMMIT
import next from "next"

const dev = process.env.NODE_ENV !== "production"
const port = Number(process.env.PORT) || 3000

export const nextApplication = next({dev, port})
export const nextRequestHandler = nextApplication.getRequestHandler()
