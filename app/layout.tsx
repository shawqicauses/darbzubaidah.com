// DONE REVIEWING: GITHUB COMMIT - 01
import {Poppins} from "next/font/google"
import {PropsWithChildren} from "react"
import "../styles/global.css"
import Providers from "./providers"
import Navigation from "../components/navigation"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const Layout = function Layout({children}: PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body className={poppins.className}>
        <Providers>
          <div className="bg-background">
            <Navigation />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}

export default Layout
