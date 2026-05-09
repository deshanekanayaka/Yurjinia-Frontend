import { createRouter } from '@tanstack/react-router'
import { routeTree } from '@/routeTree.gen'
import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient()

export const router = createRouter({
  routeTree,
  context: { queryClient },
})

// Register the router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
