// DONE REVIEWING: GITHUB COMMIT
import {fetchRequestHandler} from "@trpc/server/adapters/fetch"
import {appRouter} from "../../../../server/api"

const handler = async function handler(request: Request) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    router: appRouter,
    req: request,
    createContext: () => ({})
  })
}

export {handler as GET, handler as POST}
