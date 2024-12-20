"use client"

// DONE REVIEWING: GITHUB COMMIT - 05

import {Dialog, DialogPanel} from "@headlessui/react"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline"
import Link from "next/link"
import {useState} from "react"
import {Button} from "./ui"

export const Logo = function Logo() {
  /* Logo: Must be edited for client's actual logo */
  return (
    <Link href="/" className="-m-1.5 p-1.5">
      <span className="whitespace-nowrap text-xl font-semi-bold tracking-tight">
        <span className="text-primary">Darb</span> Zubaidah
        <span className="text-primary">.</span>
      </span>
    </Link>
  )
}

const Navigation = function Navigation({
  navigation
}: {
  navigation: {id: number; href: string; content: string; special?: boolean; auth: number}[]
}) {
  const [isMobileNavigationOpened, setIsMobileNavigationOpened] = useState<boolean>(false)

  return (
    <nav className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-xl-8">
        <div className="px-6 pt-6 lg:px-8">
          <div className="flex items-center justify-between lg:justify-start">
            <Logo />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-muted-foreground lg:hidden"
              onClick={() => setIsMobileNavigationOpened(true)}>
              <span className="sr-only">Open Mobile Navigation</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
            <ul className="hidden lg:ml-12 lg:flex lg:flex-1 lg:items-center lg:gap-x-14">
              {navigation.map((element) =>
                element.special ? (
                  <li key={element.id} className="ml-auto">
                    <Button variant="accent" size="lg" asChild>
                      <Link href={element.href} className="whitespace-nowrap text-sm leading-6">
                        {element.content}
                      </Link>
                    </Button>
                  </li>
                ) : (
                  <li key={element.id}>
                    <Link
                      href={element.href}
                      className="whitespace-nowrap text-sm font-semi-bold leading-6 text-foreground">
                      {element.content}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
      <Dialog
        open={isMobileNavigationOpened}
        onClose={setIsMobileNavigationOpened}
        className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-hidden bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-foreground/10">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-muted-foreground"
              onClick={() => setIsMobileNavigationOpened(false)}>
              <span className="sr-only">Close Mobile Navigation</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-root mt-6">
            <div className="-my-6 divide-y divide-muted">
              <ul className="space-y-2 py-6">
                {navigation.map((element) => (
                  <li key={element.id}>
                    <Link
                      href={element.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semi-bold leading-7 text-foreground hover:bg-muted">
                      {element.content}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </nav>
  )
}

export default Navigation
