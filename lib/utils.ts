// DONE REVIEWING: GITHUB COMMIT - 01
import {clsx, type ClassValue} from "clsx"
import {twMerge} from "../tailwind.config"

export const cn = function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const utils = {cn}

export default utils
