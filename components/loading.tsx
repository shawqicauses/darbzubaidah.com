// DONE REVIEWING: GITHUB COMMIT
import {Loader2Icon} from "lucide-react"
import {HTMLAttributes} from "react"
import {cn} from "../lib/utils"

const Loading = function Loading({className}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("min-w-screen shc-flex-center min-h-screen", className)}>
      <Loader2Icon className="h-10 w-10 animate-spin text-current" />
    </div>
  )
}

export default Loading
