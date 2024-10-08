"use client"

// DONE REVIEWING: GITHUB COMMIT

import {Loader2Icon, MailCheckIcon, MailIcon, MailXIcon} from "lucide-react"
import Link from "next/link"
import {Fragment} from "react"
import trpc from "../../../../client"
import {Button} from "../../../../components/ui"
import {Icon, Paragraph, Title} from "../_components"

interface Params {
  token: string
}

const Page = function Page({params}: {params: Params}) {
  const {data, isError, isPending} = trpc.authRouter.emailVerification.useQuery({
    token: params.token
  })

  const PageIcon = isError
    ? MailXIcon
    : isPending
      ? Loader2Icon
      : data.success
        ? MailCheckIcon
        : MailIcon

  return (
    <Fragment>
      <Icon
        Icon={PageIcon}
        className={isError ? "text-background" : isPending ? "animate-spin" : ""}
      />
      <Title>
        {isError
          ? "Email verification failed."
          : isPending
            ? "Email verification in progress..."
            : data.success
              ? "Email verification succeeded."
              : null}
      </Title>
      <Paragraph>
        {isError
          ? "Sorry! Unfortunately we could not verify your email address. It looks like you have an in-valid or expired token. Please, try to verify it again in a minute."
          : isPending
            ? null
            : data.success
              ? "Congrats! We could verify your email address successfully. It looks like you can now start planning your Umrah journey using our existing packages or create your own."
              : null}
      </Paragraph>
      {isError ? (
        <div className="mt-10 flex w-full max-w-xl items-center justify-center gap-x-4">
          <Button>Re-send Email</Button>
          <Button variant="link" className="text-background hover:decoration-primary-light" asChild>
            <Link href="/">Home</Link>
          </Button>
        </div>
      ) : isPending ? null : data.success ? (
        <div className="mt-10 flex w-full max-w-xl items-center justify-center gap-x-4">
          <Button asChild>
            <Link href="/packages-existing">Existing Packages</Link>
          </Button>
          <Button variant="link" className="text-background hover:decoration-primary-light" asChild>
            <Link href="/">Home</Link>
          </Button>
        </div>
      ) : null}
    </Fragment>
  )
}

export default Page
