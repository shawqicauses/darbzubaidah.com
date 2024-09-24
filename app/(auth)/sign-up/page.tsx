"use client"

// DONE REVIEWING: GITHUB COMMIT - 01

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
import {signUpSchema} from "../../../lib/schema"

const SignUp = function SignUp() {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirmation: ""
    }
  })

  return (
    <Fragment>
      <div>
        <h2 className="text-xl-2 font-bold leading-9 tracking-tight text-foreground">
          Create your account<span className="ml-0.5 text-primary">.</span>
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          You have already created an account?
          <Button variant="link" className="ml-1 p-0" asChild>
            <Link href="/sign-in">Sign in</Link>
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
                  <FormItem className="mb-4">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="passwordConfirmation"
                control={form.control}
                render={({field}) => (
                  <FormItem className="mb-6">
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <Button size="lg" type="submit" className="mb-4 w-full">
                  Create my account
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Fragment>
  )
}

export default SignUp
