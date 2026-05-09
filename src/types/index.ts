export type Priority = "High" | "Medium" | "Low"
export type TicketStatus = "todo" | "in-progress" | "done"
export type ProjectStatus = "Active" | "On Hold"

export interface User {
  id: string
  name: string
  email: string
  avatarUrl?: string
}

export interface Ticket {
  id: string
  title: string
  description?: string
  priority: Priority
  status: TicketStatus
  assigneeId: string
  projectId: string
  comments: number
  createdAt: string
}

export interface Project {
  id: string
  name: string
  description: string
  status: ProjectStatus
  accent: "brand" | "accent"
  memberIds: string[]
  createdAt: string
}
