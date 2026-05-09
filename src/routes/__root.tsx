import * as React from 'react'
import { Outlet, createRootRouteWithContext, useRouter } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface RouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: function RootComponent() {
    const router = useRouter()
    return (
      <QueryClientProvider client={router.options.context.queryClient}>
        <Outlet />
      </QueryClientProvider>
    )
  },
})
