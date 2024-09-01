"use client"

// DONE REVIEWING: GITHUB COMMIT

import {useTheme} from "next-themes"
import {ComponentProps} from "react"
import {Toaster as Sonner} from "sonner"

type ToasterProps = ComponentProps<typeof Sonner>

const Toaster = function Toaster({...props}: ToasterProps) {
  const {theme} = useTheme()
  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      toastOptions={{
        classNames: {
          toast: "toast group shc-toast-base",
          title: "shc-toast-title-base",
          description: "shc-toast-description-base",
          actionButton: "peer shc-toast-action-button-base",
          cancelButton: "peer shc-toast-cancel-button-base"
        }
      }}
      className="toaster group !font-[inherit]"
      {...props}
    />
  )
}

export {Toaster}
export default Toaster
