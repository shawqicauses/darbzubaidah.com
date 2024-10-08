"use client"

// DONE REVIEWING: GITHUB COMMIT
import {MailIcon} from "lucide-react"
import {useSearchParams} from "next/navigation"
import {Fragment} from "react"
import {Icon, Paragraph, Title} from "./_components"

const Page = function Page() {
  const searchParams = useSearchParams()
  return (
    <Fragment>
      <Icon Icon={MailIcon} />
      <Title>Check your email.</Title>
      <Paragraph>
        We have sent you a verification email with a link to{" "}
        <span className="font-medium text-background">{searchParams.get("to")}</span>. Can you
        please check your email inbox and verify your email address.
      </Paragraph>
    </Fragment>
  )
}

export default Page
