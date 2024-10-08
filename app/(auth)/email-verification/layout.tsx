// DONE REVIEWING: GITHUB COMMIT
import {PropsWithChildren} from "react"

const EmailVerificationLayout = function EmailVerificationLayout({children}: PropsWithChildren) {
  return (
    <div className="mx-auto max-w-xl-8 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="relative isolate flex flex-col items-center justify-center overflow-hidden bg-foreground px-6 py-24 text-center text-background shadow-xl-2 sm:rounded-xl-3 sm:px-16">
        {children}
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute left-1/2 top-[5%] -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]">
          <circle
            r={512}
            cx={512}
            cy={512}
            fill="url(#email-verification-layout-ellipse)"
            fillOpacity="0.75"
          />
          <defs>
            <radialGradient id="email-verification-layout-ellipse">
              <stop stopColor="rgb(var(--primary))" />
              <stop offset={1} stopColor="rgb(var(--foreground))" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default EmailVerificationLayout
