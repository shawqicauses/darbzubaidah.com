// DONE REVIEWING: GITHUB COMMIT
import {procedure, router} from "../trpc"

const userRouter = router({
  userList: procedure.query(async () => {
    return [{id: 0, username: "@shawqicauses"}]
  })
})

export default userRouter
