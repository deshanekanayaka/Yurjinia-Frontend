import { ArrowLeft } from 'lucide-react'
import { useProjectStore } from '@/store/projectStore'
import { Column } from '@/components/Column'
import {useNavigate} from "@tanstack/react-router";
import { CreateTicketModal } from '@/components/CreateTicketModal'

interface BoardViewProps {
  projectId: string
}

const COLUMNS = [
  { key: 'todo' as const, title: 'To Do' },
  { key: 'in-progress' as const, title: 'In Progress' },
  { key: 'done' as const, title: 'Done' },
]

export function BoardView({ projectId }: BoardViewProps) {
  const projects = useProjectStore((s) => s.projects)
  const project = projects.find((p) => p.id === projectId)

  const navigate = useNavigate()

  if (!project) {
    return (
      <div className="px-6 py-4">
        <p className="text-text-secondary">Project not found.</p>
      </div>
    )
  }

  return (
    <div className="px-6 py-4">
      <div className="mb-6 flex items-center gap-3">
        <button onClick={() => navigate({ to: '/' })}
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-bg-secondary text-brand transition hover:bg-brand hover:text-white"
        >
          <ArrowLeft size={18} />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-black">{project.name}</h1>
          <p className="text-sm text-text-secondary">{project.description}</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {COLUMNS.map((col) => (
          <Column
            key={col.key}
            title={col.title}
            columnStatus={col.key}
            projectId={projectId}
          />
        ))}
      </div>
      <CreateTicketModal projectId={projectId} />
    </div>
  )
}
