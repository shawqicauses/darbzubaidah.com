// DONE REVIEWING: GITHUB COMMIT - 03
import {Montserrat} from "next/font/google"
import {PropsWithChildren} from "react"
import Footer from "../components/footer"
import Navigation from "../components/navigation"
import {cn} from "../lib/utils"
import "../styles/global.css"
import Providers from "./providers"

const font = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const Layout = function Layout({children}: PropsWithChildren) {
  return (
    <html lang="en" className="h-full">
      <head />
      <body className={cn(font.className, "h-full")}>
        <Providers>
          <div className="h-full bg-background">
            <Navigation />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

export default Layout
