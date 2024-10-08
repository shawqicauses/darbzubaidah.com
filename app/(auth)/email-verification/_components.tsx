// DONE REVIEWING: GITHUB COMMIT
import {ElementType, HTMLAttributes, PropsWithChildren} from "react"
import {cn} from "../../../lib/utils"

export const Icon = function Icon({
  Icon,
  className
}: {Icon: ElementType<HTMLAttributes<SVGElement>>} & HTMLAttributes<SVGElement>) {
  return (
    <div className="shc-flex-center h-24 w-24 rounded-full bg-background/5 text-primary ring-1 ring-inset ring-background/10">
      <Icon strokeWidth={1.5} className={cn("h-10 w-10", className)} />
    </div>
  )
}

export const Title = function Title({children}: PropsWithChildren) {
  return (
    <h1 className="mx-auto mt-10 max-w-xl-2 text-xl-3 font-bold tracking-tight text-background sm:text-xl-4">
      {children}
    </h1>
  )
}

export const Paragraph = function Paragraph({children}: PropsWithChildren) {
  return <p className="mx-auto mt-6 max-w-xl-3 text-lg leading-8 text-muted/75">{children}</p>
}
