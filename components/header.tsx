// DONE REVIEWING: GITHUB COMMIT - 02
import Image from "next/image"
import Link from "next/link"
import {Button} from "./ui"

const Header = function Header() {
  return (
    <header className="relative">
      <div className="mx-auto max-w-xl-8">
        <div className="relative z-40 h-auto pt-14 lg:h-screen lg:w-full lg:max-w-xl-2">
          <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
            <div className="mx-auto max-w-xl-2 lg:mx-0">
              <div className="hidden sm:mb-10 sm:flex">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-foreground ring-1 ring-foreground/10 hover:ring-foreground/20">
                  Discover our new pre-arranged Umrah option.{" "}
                  <Link
                    href="/pre-arranged-umrah"
                    className="whitespace-nowrap font-medium text-primary">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              <h1 className="text-xl-4 font-bold tracking-tight text-foreground sm:text-xl-6">
                The First Application For <span className="text-primary">Umrah</span> Journey
                <span className="text-primary">.</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Dar Abo Zubaidah is the first application that can take away the confusion that
                happens to you while planning your Umrah. We have a pre-arranged Umrah option and a
                fully-customized one.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <Button size="lg" asChild>
                  <Link href="/pre-arranged-umrah">Get started</Link>
                </Button>
                <Button variant="outline" size="lg" className="gap-3" asChild>
                  <Link href="/about">
                    Learn more
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-muted lg:absolute lg:inset-y-0 lg:right-0 lg:z-30 lg:w-1/2">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute inset-y-0 left-0 z-20 h-full w-80 -translate-x-1/2 transform fill-background">
          <polygon points="0,0 90,0 50,100 0,100" />
        </svg>
        <div className="absolute inset-0 z-10 bg-primary mix-blend-multiply" />
        <Image
          src="/assets/header-image.jpg"
          alt="Umrah"
          fill
          className="!static aspect-[3/2] !h-auto !w-auto object-cover grayscale lg:aspect-auto lg:!h-full lg:!w-full"
        />
      </div>
    </header>
  )
}

export default Header
