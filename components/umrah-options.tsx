// DONE REVIEWING: GITHUB COMMIT - 01

import {CheckIcon} from "@heroicons/react/24/solid"
import Link from "next/link"
import {Button} from "./ui"

const umrahOptions = [
  {
    id: 0,
    href: "/pre-arranged-umrah",
    name: "Pre-arranged Umrah",
    description:
      "Our team has created a pre-arranged Umrah option that includes airline tickets, hotel rooms, and other features.",
    price: "999 USD",
    per: "3 Travelers",
    features: [
      "Airline Tickets",
      "Hotel Rooms",
      "Traveling Support",
      "Legal Support",
      "Much More..."
    ]
  },
  {
    id: 1,
    href: "/custom-umrah",
    name: "Custom Umrah",
    description:
      "An easy option for your Umrah journey to customize your preferred airline, hotel, and other customizable options.",
    price: "Custom",
    per: "Traveler",
    features: [
      "Custom Airline",
      "Custom Hotel",
      "Your Own VISA",
      "Unlimited Travelers",
      "Much More..."
    ]
  }
]

const UmrahOptions = function UmrahOptions() {
  return (
    <section className="relative isolate overflow-hidden bg-foreground">
      <div className="mx-auto max-w-xl-8 px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-xl-4">
          <h2 className="text-base font-semi-bold leading-7 text-primary">Our Umrah Options</h2>
          <p className="mt-2 text-xl-4 font-bold tracking-tight text-background sm:text-xl-5">
            The right application for you<span className="text-primary">,</span>{" "}
            <br className="hidden md:inline lg:hidden" />
            wherever you are<span className="text-primary">.</span>
          </p>
          <svg
            viewBox="0 0 1208 1024"
            className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0">
            <ellipse cx={604} cy={512} rx={604} ry={512} fill="url(#umrah-options-ellipse)" />
            <defs>
              <radialGradient id="umrah-options-ellipse">
                <stop stopColor="rgb(34, 197, 94)" />
                <stop offset={1} stopColor="rgb(9, 9, 11)" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flow-root bg-background pb-24 sm:pb-32">
        <div className="-mt-80">
          <div className="mx-auto max-w-xl-7 px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-xl-4 lg:grid-cols-2">
              {umrahOptions.map((umrahOption) => (
                <div
                  key={umrahOption.id}
                  className="flex flex-col justify-between rounded-xl-3 bg-background p-8 shadow-xl ring-1 ring-foreground/10 sm:p-8">
                  <div>
                    <h3 className="text-base font-semi-bold leading-7 text-primary">
                      {umrahOption.name}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-x-2">
                      <span className="text-xl-5 font-bold tracking-tight text-foreground">
                        {umrahOption.price}
                      </span>
                      <span className="text-sm font-semi-bold uppercase leading-7 tracking-widest text-muted-foreground/75">
                        /{umrahOption.per}
                      </span>
                    </div>
                    <p className="mt-6 line-clamp-2 text-base leading-7 text-muted-foreground">
                      {umrahOption.description}
                    </p>
                    <ul className="mt-10 space-y-3 text-sm leading-6 text-muted-foreground">
                      {umrahOption.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon
                            aria-hidden="true"
                            className="h-6 w-5 flex-none text-primary"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    variant={umrahOption.id === 1 ? "accent" : "primary"}
                    size="lg"
                    className="mt-10"
                    asChild>
                    <Link href={umrahOption.href}>Start your Umrah</Link>
                  </Button>
                </div>
              ))}
              <div className="flex flex-col items-center gap-x-8 gap-y-6 rounded-xl-3 p-8 ring-1 ring-foreground/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                <div className="lg:min-w-0 lg:flex-1">
                  <h3 className="text-lg font-semi-bold leading-8 tracking-tight text-primary">
                    Need more details?
                  </h3>
                  <p className="mt-1 text-base leading-7 text-muted-foreground">
                    Is what we are offering is not clear to you and you need more assistant to help
                    you choose between a pre-arranged Umrah and a customizable one?
                  </p>
                </div>
                <Button variant="outline" asChild>
                  <Link href="mailto:contact@darbzubaidah.com">Contact us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UmrahOptions
