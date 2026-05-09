import { Show, SignInButton, UserButton } from '@clerk/react'
import { useUser } from '@clerk/react'

export function Navbar() {
  const { user } = useUser()

  return (
    <nav className="m-3 flex items-center justify-between rounded-2xl bg-bg-secondary px-6 py-3">
      <div className="text-2xl font-extrabold tracking-tight text-brand">
        Yurjinia
      </div>
      <div className="flex items-center gap-3">
        <Show when="signed-in">
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm font-semibold text-black leading-tight">
                {user?.fullName ?? user?.firstName ?? 'User'}
              </div>

            </div>
            <UserButton />
          </div>
        </Show>
        <Show when="signed-out">
          <SignInButton />
        </Show>
      </div>
    </nav>
  )
}