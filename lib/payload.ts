// DONE REVIEWING: GITHUB COMMIT - 01
import {ReadonlyRequestCookies} from "next/dist/server/web/spec-extension/adapters/request-cookies"
import {NextResponse} from "next/server"
import {BeforeChangeHook} from "payload/dist/collections/config/types"
import {Access} from "payload/types"
import {User} from "../payload-types"

export const userServer = async function userServer(
  cookies: NextResponse["cookies"] | ReadonlyRequestCookies
) {
  const token = cookies.get("payload-token")?.value
  const userRequest = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`, {
    headers: {Authorization: `Bearer ${token}`}
  })

  const {user} = (await userRequest.json()) as {user: User | null}
  return user
}

export const insertUserToDocument: BeforeChangeHook = function insertUserToDocument({req, data}) {
  const user = req.user as User | null
  if (!user) return data
  return {...data, user: user.id}
}

export const isAdmin = function isAdmin(): Access {
  return async function callback({req}) {
    const user = req.user as User | null

    if (!user) return false
    if (user.role === "admin") return true

    return false
  }
}

export const isAdminOrHasAccessTo = function isAdminOrHasAccessTo(): Access {
  return async function callback({req}) {
    const user = req.user as User | null

    if (!user) return false
    if (user.role === "admin") return true

    return {
      user: {
        equals: req.user.id
      }
    }
  }
}
