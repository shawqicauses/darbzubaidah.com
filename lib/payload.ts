// DONE REVIEWING: GITHUB COMMIT
import {ReadonlyRequestCookies} from "next/dist/server/web/spec-extension/adapters/request-cookies"
import {NextResponse} from "next/server"
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
