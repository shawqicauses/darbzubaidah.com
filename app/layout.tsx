// DONE REVIEWING: GITHUB COMMIT - 04
import {Montserrat} from "next/font/google"
import {cookies} from "next/headers"
import {PropsWithChildren} from "react"
import Footer from "../components/footer"
import Navigation from "../components/navigation"
import {userServer} from "../lib/payload"
import {cn} from "../lib/utils"
import "../styles/global.css"
import Providers from "./providers"

// Umrah Options: Existing Packages - Create Custom Package

const font = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const navigation = [
  {id: 0, href: "/packages-existing", content: "Existing Packages", auth: 0},
  {id: 1, href: "/packages-custom", content: "Create Custom Package", auth: 0},
  {id: 2, href: "/about", content: "About", auth: 0},
  {id: 3, href: "/sign-up", content: "Sign up", special: true, auth: 1},
  {id: 4, href: "/profile", content: "Profile", special: true, auth: 2}
]

const Layout = async function Layout({children}: PropsWithChildren) {
  const nextCookies = cookies()
  const user = await userServer(nextCookies)
  const navigationFiltered = navigation.filter(
    (element) => element.auth === 0 || (!user && element.auth === 1) || (user && element.auth === 2)
  )

  return (
    <html lang="en" className="h-full">
      <head />
      <body className={cn(font.className, "h-full")}>
        <Providers>
          <div className="h-full bg-background">
            <Navigation navigation={navigationFiltered} />
            {children}
            <Footer navigation={navigationFiltered} />
          </div>
        </Providers>
      </body>
    </html>
  )
}

export default Layout
