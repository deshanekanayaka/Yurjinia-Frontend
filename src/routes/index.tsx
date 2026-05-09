import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { Dashboard } from '@/components/Dashboard'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Dashboard />
    </div>
  )
}
