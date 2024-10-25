// DONE REVIEWING: GITHUB COMMIT - 01
import {Access, AccessArgs} from "payload/types"
import {User} from "../../payload-types"

export const isRole = function isRole(user: Partial<User>, roles: User["role"][] = []): boolean {
  if (roles.some((role) => user.role === role)) return true
  return false
}

type IsAdmin = (args: AccessArgs<unknown, User>) => boolean

export const isAdmin: IsAdmin = function isAdmin({req: {user}}) {
  if (!user) return false
  return isRole(user, ["admin"])
}

export const isAdminOrSignedIn: Access = function isAdminOrSignedIn({req: {user}}) {
  if (isRole(user, ["admin"])) return true
  return Boolean(user)
}

export const isAdminOrUser: Access = function isAdminOrUser({req: {user}}) {
  if (!user) return false
  if (isRole(user, ["admin"])) return true

  return {id: {equals: user.id}}
}

export const isAdminOrOrderedBy: Access = function isAdminOrOrderedBy({req: {user}}) {
  if (!user) return false
  if (isRole(user, ["admin"])) return true

  return {
    orderedBy: {
      equals: user.id
    }
  }
}

export const isAnyone: Access = function isAnyone() {
  return true
}
