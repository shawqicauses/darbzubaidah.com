"use client"

// DONE REVIEWING: GITHUB COMMIT

import {type DialogProps} from "@radix-ui/react-dialog"
import Command from "."
import Dialog from "../dialog"
import DialogContent from "../dialog/dialog-content"

interface CommandDialogProps extends DialogProps {}

const CommandDialog = function CommandDialog({children, ...props}: CommandDialogProps) {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="shc-command-dialog-base">{children}</Command>
      </DialogContent>
    </Dialog>
  )
}

export default CommandDialog
