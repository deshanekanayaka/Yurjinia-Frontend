import { MessageSquare } from 'lucide-react'
import { Ticket, Priority } from '@/types'

const priorityStyles: Record<Priority, string> = {
    High: 'bg-status-high-bg text-status-high-text',
    Medium: 'bg-status-medium-bg text-status-medium-text',
    Low: 'bg-status-low-bg text-status-low-text',
}

const COLORS = ['#155DFC', '#14B8A6', '#FF7B00', '#7C3AED', '#FA0202']
function avatarColor(name: string) {
  let h = 0
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) % COLORS.length
  return COLORS[h]
}



export function TicketCard({ ticket }: { ticket: Ticket }) {

  return (
    <div className="cursor-pointer rounded-xl bg-white p-3 shadow-sm transition hover:shadow-md">
      <h4 className="mb-3 line-clamp-2 text-sm font-semibold text-black">
        {ticket.title}
      </h4>
      <span
        className={`inline-block rounded-md px-2 py-0.5 text-[11px] font-semibold ${priorityStyles[ticket.priority]}`}
      >
        {ticket.priority}
      </span>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-1 text-xs text-text-secondary">
          <MessageSquare size={14} />
          <span>{ticket.comments}</span>
        </div>
        <div
          className="flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold text-white"
          style={{ backgroundColor: avatarColor(ticket.assigneeId) }}
          title={ticket.assigneeId}
        >
          {ticket.assigneeId
            .split(' ')
            .map((p) => p[0])
            .join('')
            .slice(0, 2)}
        </div>
      </div>
    </div>
  )
}
