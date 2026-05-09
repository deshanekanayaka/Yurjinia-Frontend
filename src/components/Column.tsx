import { Plus } from 'lucide-react'
import { TicketStatus } from '@/types'
import { useProjectStore } from '@/store/projectStore'
import { TicketCard } from '@/components/TicketCard'

interface ColumnProps {
  title: string
  columnStatus: TicketStatus
  projectId: string
}

export function Column({ title, columnStatus, projectId }: ColumnProps) {
  const projects = useProjectStore((s) => s.projects)
  const setCreateTicketModalOpen = useProjectStore(
    (s) => s.setCreateTicketModalOpen
  )
  const project = projects.find((p) => p.id === projectId)
  const tickets = ((project as any)?.tickets ?? []).filter(
    (t: any) => t.status === columnStatus
  )

  return (
    <div className="flex h-full flex-col rounded-2xl bg-bg-secondary p-3">
      <div className="mb-3 flex items-center justify-between px-1">
        <h3 className="text-sm font-bold uppercase tracking-wide text-black">
          {title}
        </h3>
        <span className="rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-brand">
          {tickets.length}
        </span>
      </div>
      <div className="flex-1 space-y-2 overflow-y-auto">
        {tickets.map((ticket: any) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
      <button
        onClick={() => setCreateTicketModalOpen(true, columnStatus)}
        className="mt-3 flex w-full items-center justify-center gap-1 rounded-xl border-2 border-dashed border-border-soft py-2 text-sm font-semibold text-text-secondary transition hover:border-brand hover:bg-white hover:text-brand"
      >
        <Plus size={16} /> Add Ticket
      </button>
    </div>
  )
}
