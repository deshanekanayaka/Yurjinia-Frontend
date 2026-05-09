import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Project, Ticket, TicketStatus } from '@/types'

interface ProjectStore {
    projects: Project[]
    activeProjectId: string | null
    isCreateProjectModalOpen: boolean
    isCreateTicketModalOpen: boolean
    activeTicketColumnStatus: TicketStatus | null
    editingProjectId: string | null
    createProject: (data: Pick<Project, 'name' | 'description'>) => void
    setActiveProject: (id: string | null) => void
    setCreateProjectModalOpen: (open: boolean) => void
    setCreateTicketModalOpen: (open: boolean, status?: TicketStatus) => void
    addTicket: (projectId: string, ticket: Omit<Ticket, 'id' | 'createdAt'>) => void
    deleteProject: (id: string) => void
    setEditingProjectId: (id: string | null) => void
    updateProject: (id: string, data: Pick<Project, 'name' | 'description'>) => void
}

export const useProjectStore = create<ProjectStore>()(
    persist(
        (set) => ({
            projects: [
                {
                    id: 'p1',
                    name: 'Marketing Website',
                    description: 'Redesign the public marketing site with new branding.',
                    status: 'Active',
                    accent: 'brand',
                    memberIds: ['Jane Cooper', 'Wade Warren', 'Esther Howard', 'Cameron W'],
                    createdAt: new Date().toISOString(),
                },
                {
                    id: 'p2',
                    name: 'Mobile App v2',
                    description: 'Ship offline-first mode and push notifications.',
                    status: 'Active',
                    accent: 'accent',
                    memberIds: ['Brooklyn Simmons', 'Leslie Alexander', 'Guy Hawkins'],
                    createdAt: new Date().toISOString(),
                },
                {
                    id: 'p3',
                    name: 'Q3 Analytics',
                    description: 'Build dashboards for revenue and engagement.',
                    status: 'On Hold',
                    accent: 'brand',
                    memberIds: ['Robert Fox', 'Jenny Wilson'],
                    createdAt: new Date().toISOString(),
                },
            ],
            activeProjectId: null,
            isCreateProjectModalOpen: false,
            isCreateTicketModalOpen: false,
            activeTicketColumnStatus: null,
            editingProjectId: null,

            createProject: (data) =>
                set((state) => ({
                    projects: [
                        ...state.projects,
                        {
                            id: `p${Date.now()}`,
                            name: data.name,
                            description: data.description,
                            status: 'Active',
                            accent: Math.random() > 0.5 ? 'brand' : 'accent',
                            memberIds: [],
                            createdAt: new Date().toISOString(),
                        },
                    ],
                    isCreateProjectModalOpen: false,
                })),

            setActiveProject: (id) => set({ activeProjectId: id }),

            setCreateProjectModalOpen: (open) =>
                set({ isCreateProjectModalOpen: open }),

            setCreateTicketModalOpen: (open, status) =>
                set({
                    isCreateTicketModalOpen: open,
                    activeTicketColumnStatus: status ?? null,
                }),

            addTicket: (projectId, ticket) =>
                set((state) => ({
                    projects: state.projects.map((p) =>
                        p.id === projectId
                            ? {
                                ...p,
                                tickets: [
                                    ...((p as any).tickets ?? []),
                                    {
                                        ...ticket,
                                        id: `t${Date.now()}`,
                                        createdAt: new Date().toISOString(),
                                    },
                                ],
                            }
                            : p
                    ),
                })),

            setEditingProjectId: (id) => set({ editingProjectId: id }),

            updateProject: (id, data) =>
                set((state) => ({
                    projects: state.projects.map((p) =>
                        p.id === id
                            ? { ...p, name: data.name, description: data.description }
                            : p
                    ),
                    editingProjectId: null,
                })),

            deleteProject: (id) =>
                set((state) => ({
                    projects: state.projects.filter((p) => p.id !== id),
                })),
        }),
        {
            name: 'yurjinia-projects',
        }
    )
)