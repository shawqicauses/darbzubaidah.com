"use client"

// DONE REVIEWING: GITHUB COMMIT

import {zodResolver} from "@hookform/resolvers/zod"
import Link from "next/link"
import {Fragment} from "react"
import {useForm} from "react-hook-form"
import {z} from "zod"
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
import {signInSchema} from "../../../lib/schema"

const SignIn = function SignIn() {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  return (
    <Fragment>
      <div>
        <h2 className="text-xl-2 font-bold leading-9 tracking-tight text-foreground">
          Sign in to your account<span className="ml-0.5 text-primary">.</span>
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Do not have an account?
          <Button variant="link" className="ml-1 p-0" asChild>
            <Link href="/sign-up">Create one</Link>
          </Button>
        </p>
      </div>

      <div className="mt-10">
        <div>
          <Form {...form}>
            <form>
              <FormField
                name="email"
                control={form.control}
                render={({field}) => (
                  <FormItem className="mb-4">
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
                  <FormItem className="mb-2">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="mb-4 text-sm leading-6">
                <Button variant="link" className="p-0" asChild>
                  <Link href="/forgot-password">Forgot password?</Link>
                </Button>
              </div>

              <div>
                <Button size="lg" type="submit" className="w-full">
                  Sign in
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Fragment>
  )
}

export default SignIn
