// DONE REVIEWING: GITHUB COMMIT - 02
import {Access, AccessArgs, FieldAccess} from "payload/types"
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

export const isUserField: FieldAccess = function isUserField({req, data}) {
  const {user} = req
  if (user && data?.user) if (user.id === data.user?.id) return true
  return false
}

export const isAdminOrUserField: FieldAccess = function isAdminOrUserField({req, data}) {
  if (isAdmin({req})) return true
  return isUserField({req, data})
}

export const isWebsiteOnly = function isWebsiteOnly(authorizationFunction: Access): Access {
  return async function callback({req}) {
    const {referer} = req.headers
    if (referer?.includes("dashboard")) return isAdmin({req})
    return authorizationFunction({req})
  }
}

export const isAnyone: Access = function isAnyone() {
  return true
}
