// DONE REVIEWING: GITHUB COMMIT - 01
import {initTRPC} from "@trpc/server"
import {ExpressContext} from "../../server"

const t = initTRPC.context<ExpressContext>().create()

export const {router} = t
export const {procedure} = t
