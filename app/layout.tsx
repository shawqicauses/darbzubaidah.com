// DONE REVIEWING: GITHUB COMMIT - 02
import {Montserrat} from "next/font/google"
import {PropsWithChildren} from "react"
import "../styles/global.css"
import Providers from "./providers"
import Footer from "../components/footer"
import Navigation from "../components/navigation"

const font = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const Layout = function Layout({children}: PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body className={font.className}>
        <Providers>
          <div className="bg-background">
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
