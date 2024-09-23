// DONE REVIEWING: GITHUB COMMIT
import Image from "next/image"
import {PropsWithChildren} from "react"

const AuthLayout = function AuthLayout({children}: PropsWithChildren) {
  return (
    <div className="flex h-full min-h-[48rem]">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">{children}</div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute left-0 z-20 h-full w-80 fill-background">
          <polygon points="0,0 90,0 50,100 0,100" />
        </svg>
        <div className="absolute inset-0 z-10 bg-primary mix-blend-multiply" />
        <Image src="/assets/header-image.jpg" alt="Auth" fill className="object-cover grayscale" />
      </div>
    </div>
  )
}

export default AuthLayout
