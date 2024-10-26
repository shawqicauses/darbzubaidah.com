// DONE REVIEWING: GITHUB COMMIT
import {isRole} from "./access"

type Admin =
  | ((args: {
      user: {
        [key: string]: unknown
        collection: string
        email: string
        id: string
      }
    }) => boolean)
  | boolean

export const isHidden: Admin = function isHidden({user}) {
  return !isRole(user, ["admin"])
}

export default {isHidden}
