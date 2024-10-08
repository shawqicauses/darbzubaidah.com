"use client"

// DONE REVIEWING: GITHUB COMMIT - 01

import {zodResolver} from "@hookform/resolvers/zod"
import dynamic from "next/dynamic"
import Link from "next/link"
import {useRouter} from "next/navigation"
import {useForm} from "react-hook-form"
import {toast} from "sonner"
import {z} from "zod"
import trpc from "../../../client"
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input
} from "../../../components/ui"
import {errors, successes} from "../../../lib/messages"
import {signInSchema} from "../../../lib/schema"

const Loading = dynamic(() => import("../../../components/loading"))

const SignIn = function SignIn() {
  const router = useRouter()
  const {mutate, isPending: isSignInPending} = trpc.authRouter.signIn.useMutation({
    onError(error) {
      if (error.data?.code === "UNAUTHORIZED") {
        toast(errors.AUTH[error.data.code].title, {
          description: errors.AUTH[error.data.code].description
        })
        return
      }

      toast(errors.DEFAULT.title, {description: errors.DEFAULT.description})
    },
    onSuccess() {
      toast(successes.AUTH.SIGN_IN.title, {description: successes.AUTH.SIGN_IN.description})
      if (origin) {
        router.push(`/${origin}`)
        return
      }

      router.push("/")
    }
  })

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = async function onSubmit(data: z.infer<typeof signInSchema>) {
    await mutate({
      email: data.email,
      password: data.password
    })
  }

  if (isSignInPending) return <Loading className="text-primary" />

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-xl-3 flex-col items-center justify-center px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div>
        <h2 className="text-center text-xl-2 font-bold leading-9 tracking-tight text-foreground">
          Sign in to your account<span className="ml-0.5 text-primary">.</span>
        </h2>
        <p className="mt-4 max-w-xl text-center text-base leading-relaxed text-muted-foreground">
          Please, provide us with your email and password to sign you in your account and go back to
          planning your Umrah journey.
        </p>
      </div>
      <div className="mt-10 w-full max-w-md">
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-6 gap-6">
              <FormField
                name="email"
                control={form.control}
                render={({field}) => (
                  <FormItem className="col-span-6">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={form.control}
                render={({field}) => (
                  <FormItem className="col-span-6">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="col-span-6 flex flex-col items-center justify-start gap-3">
                <Button size="lg" type="submit" className="w-full">
                  Sign in
                </Button>
                <p className="text-sm text-muted-foreground">
                  Do not have an account?{" "}
                  <Link href="/sign-up" className="text-foreground underline">
                    Sign up
                  </Link>
                  .
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
