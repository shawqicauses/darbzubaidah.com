"use client"

// DONE REVIEWING: GITHUB COMMIT

import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {httpBatchLink} from "@trpc/client"
import {PropsWithChildren, useState} from "react"
import trpc from "../client"
import {Toaster} from "../components/ui"

const createQueryClient = function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000
      }
    }
  })
}

let browserQueryClient: QueryClient | undefined

const getQueryClient = function getQueryClient() {
  if (typeof window === "undefined") return createQueryClient()
  if (!browserQueryClient) browserQueryClient = createQueryClient()
  return browserQueryClient
}

const Providers = function Providers({children}: PropsWithChildren) {
  const queryClient = getQueryClient()
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3000/api/trpc"
        })
      ]
    })
  )

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
        <Toaster />
      </QueryClientProvider>
    </trpc.Provider>
  )
}

export default Providers
