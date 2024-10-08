"use client"

// DONE REVIEWING: GITHUB COMMIT - 04

import {zodResolver} from "@hookform/resolvers/zod"
import {useQuery} from "@tanstack/react-query"
import dynamic from "next/dynamic"
import Link from "next/link"
import {useRouter} from "next/navigation"
import {useForm} from "react-hook-form"
import {toast} from "sonner"
import {z, ZodError} from "zod"
import trpc from "../../../client"
import {
  Button,
  Calendar,
  DatePicker,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input
} from "../../../components/ui"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../components/ui/select"
import {errors, successes} from "../../../lib/messages"
import {signUpSchema} from "../../../lib/schema"

const Loading = dynamic(() => import("../../../components/loading"))

const SignUp = function SignUp() {
  const router = useRouter()
  const {
    data: countries,
    error: countriesError,
    isPending: isCountriesPending
  } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const response = await fetch(
        ["https://restcountries.com/v3.1/all", ["fields", "name"].join("=")].join("?")
      )

      const data = await response.json()
      return data
    }
  })

  const {mutate, isPending: isSignUpPending} = trpc.authRouter.signUp.useMutation({
    onError(error) {
      if (error.data?.code === "CONFLICT") {
        toast(errors.AUTH.CONFLICT.title, {description: errors.AUTH.CONFLICT.description})
        return
      }

      if (error instanceof ZodError) {
        toast("Error 😔", {description: error.errors[0].message})
        return
      }

      toast(errors.DEFAULT.title, {description: errors.DEFAULT.description})
    },
    onSuccess({emailVerificationSentTo}) {
      toast(successes.AUTH.SIGN_UP.title, {description: successes.AUTH.SIGN_UP.description})
      router.push(["/email-verification", "?", "to", "=", emailVerificationSentTo].join(""))
    }
  })

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: new Date(Date.now() - 18 * 365 * 24 * 60 * 60 * 1000).toString(),
      nationality: "select-a-country",
      passportNumber: 1234567,
      email: "",
      password: "",
      passwordConfirmation: ""
    }
  })

  const onSubmit = async function onSubmit(data: z.infer<typeof signUpSchema>) {
    await mutate({
      firstName: data.firstName,
      lastName: data.lastName,
      dateOfBirth: data.dateOfBirth,
      nationality: data.nationality,
      passportNumber: data.passportNumber,
      email: data.email,
      password: data.password,
      passwordConfirmation: data.passwordConfirmation
    })
  }

  if (isCountriesPending || isSignUpPending) return <Loading className="text-primary" />

  if (!countries || countriesError) {
    toast(errors.COUNTRIES.title, {description: errors.COUNTRIES.description})
    throw new Error(errors.COUNTRIES.description)
  }

  const countriesSimplified = countries.map(
    (country: {name: {common: string}}) => country.name.common
  )

  const countriesSorted = countriesSimplified?.sort((a: string, b: string) => a.localeCompare(b))

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-xl-3 flex-col items-center justify-center px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div>
        <h2 className="text-center text-xl-2 font-bold leading-9 tracking-tight text-foreground">
          Welcome to Dar Abu Zubaidah<span className="ml-0.5 text-primary">.</span>
        </h2>
        <p className="mt-4 max-w-xl text-center text-base leading-relaxed text-muted-foreground">
          Please, provide us with all information we need to create your account and start planning
          your Umrah journey.
        </p>
      </div>
      <div className="mt-10 w-full">
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-6 gap-6">
              <FormField
                name="firstName"
                control={form.control}
                render={({field}) => (
                  <FormItem className="col-span-6 sm:col-span-3">
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="lastName"
                control={form.control}
                render={({field}) => (
                  <FormItem className="col-span-6 sm:col-span-3">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="dateOfBirth"
                control={form.control}
                render={({field}) => (
                  <FormItem className="col-span-6 sm:col-span-3">
                    <FormLabel>Date of Birth</FormLabel>
                    <FormControl>
                      <DatePicker date={field.value}>
                        <Calendar
                          mode="single"
                          selected={new Date(field.value)}
                          onSelect={(value) => {
                            field.onChange(value?.toString())
                          }}
                        />
                      </DatePicker>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="nationality"
                control={form.control}
                render={({field}) => (
                  <FormItem className="col-span-6 sm:col-span-3">
                    <FormLabel>Nationality</FormLabel>
                    <FormControl>
                      <FormControl>
                        <Select
                          defaultValue="select-a-country"
                          value={field.value}
                          onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="select-a-country">Select a country</SelectItem>
                            {countriesSorted?.map((country: string) => (
                              <SelectItem key={country} value={country}>
                                {country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="passportNumber"
                control={form.control}
                render={({field}) => (
                  <FormItem className="col-span-6">
                    <FormLabel>Passport Number</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" className="font-mono" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              <FormField
                name="passwordConfirmation"
                control={form.control}
                render={({field}) => (
                  <FormItem className="col-span-6">
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="col-span-6">
                <p className="text-sm text-muted-foreground">
                  By creating an account, you agree to our
                  <Link href="/terms-and-conditions" className="text-foreground underline">
                    {" "}
                    terms and conditions{" "}
                  </Link>
                  and{" "}
                  <Link href="/privacy-policy" className="text-foreground underline">
                    privacy policy
                  </Link>
                  .
                </p>
              </div>
              <div className="col-span-6 flex flex-col items-center justify-start gap-3 md:flex-row">
                <Button size="lg" type="submit" className="w-full md:w-max">
                  Create my account
                </Button>
                <p className="text-sm text-muted-foreground">
                  Do you already have an account?{" "}
                  <Link href="/sign-in" className="text-foreground underline">
                    Sign in
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

export default SignUp
