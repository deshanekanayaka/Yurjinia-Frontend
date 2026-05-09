import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { BoardView } from '@/components/BoardView'

export const Route = createFileRoute('/board/$projectId')({
  component: BoardPage,
})

function BoardPage() {
  const { projectId } = Route.useParams()
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <BoardView projectId={projectId} />
    </div>
  )
}
