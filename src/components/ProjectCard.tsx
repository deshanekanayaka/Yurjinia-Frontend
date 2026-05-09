import React from 'react'
import { Pencil, Trash2, MoreHorizontal } from 'lucide-react'
import { Project } from '@/types'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import {useProjectStore} from "@/store/projectStore";

const COLORS = ['#155DFC', '#14B8A6', '#FF7B00', '#7C3AED', '#FA0202']
function avatarColor(name: string) {
  let h = 0
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) % COLORS.length
  return COLORS[h]
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts[parts.length - 1]?.[0] ?? ''
  return (first + last).toUpperCase().slice(0, 2)
}

export interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const accentColor = project.accent === 'brand' ? '#155DFC' : '#14B8A6'

  const members = project.memberIds.slice(0, 3)
  const overflow = Math.max(0, project.memberIds.length - members.length)

  const deleteProject = useProjectStore((s) => s.deleteProject)

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      className="group relative cursor-pointer rounded-2xl border border-border-soft bg-white p-4 shadow-sm transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-md"
    >
      <div
        className="absolute left-0 top-0 h-full w-px"
        style={{ backgroundColor: accentColor, width: '1.5px' }}
      />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="absolute right-3 top-3 rounded-md p-1 text-text-secondary hover:bg-bg-secondary"
            onClick={(e) => e.stopPropagation()}
          >
            <MoreHorizontal size={16} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={(e) => {
              e.stopPropagation()
              // TODO: open edit project modal
            }}
          >
            <Pencil size={14} className="mr-2 text-text-secondary" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-red-500 hover:text-red-600"
            onClick={(e) => {
              e.stopPropagation()
              deleteProject(project.id) //delete project with id
            }}
          >
            <Trash2 size={14} className="mr-2" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="pl-2 pr-6">
        <h3 className="truncate text-base font-semibold text-black">{project.name}</h3>
        <p className="mt-1 truncate text-sm text-text-secondary">{project.description}</p>
      </div>

      <div className="mt-4 flex items-center justify-between pl-2 pr-2">
        <div className="flex -space-x-2 items-center">
          {members.map((name, i) => (
            <div
              key={name + i}
              className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-white shadow-sm"
              style={{ backgroundColor: avatarColor(name) }}
              title={name}
            >
              {initials(name)}
            </div>
          ))}
          {overflow > 0 && (
            <div className="ml-2 rounded-full bg-bg-secondary px-2 py-0.5 text-xs font-medium text-text-secondary">+{overflow}</div>
          )}
        </div>

        <div className="flex items-center gap-2">
          {project.status === 'Active' ? (
            <span className="rounded-full px-2 py-0.5 text-xs font-semibold" style={{ backgroundColor: '#E3FDEB', color: '#016A30' }}>
              Active
            </span>
          ) : (
            <span className="rounded-full px-2 py-0.5 text-xs font-semibold" style={{ backgroundColor: '#FFF8D5', color: '#FF7B00' }}>
              On Hold
            </span>
          )}
          <span className="rounded-full bg-bg-secondary px-2 py-0.5 text-xs font-medium text-text-secondary">0 tickets</span>
        </div>
      </div>
    </div>
  )
}
