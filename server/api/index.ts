// DONE REVIEWING: GITHUB COMMIT - 01
import authRouter from "./routers/auth"
import userRouter from "./routers/user"
import {router} from "./trpc"

export const appRouter = router({
  authRouter,
  userRouter
})

export type AppRouter = typeof appRouter
