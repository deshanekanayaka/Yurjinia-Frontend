import { ClipboardList, Plus, Settings } from 'lucide-react'
import { useProjectStore } from '@/store/projectStore'
import { ProjectCard } from '@/components/ProjectCard'
import { CreateProjectModal } from '@/components/CreateProjectModal'
import { useNavigate } from '@tanstack/react-router'

export function Dashboard() {
  const projects = useProjectStore((s) => s.projects)
  const setCreateProjectModalOpen = useProjectStore((s) => s.setCreateProjectModalOpen)
  const navigate = useNavigate()

  return (
      <div className="px-6 py-4">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-black">Projects</h1>
            <p className="text-sm text-text-secondary">
              Manage and track all your projects in one place.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
                className="rounded-lg p-2 text-text-secondary hover:bg-bg-secondary"
                onClick={() => {}}
            >
              <Settings size={18} />
            </button>
            {projects.length > 0 && (
                <button
                    className="inline-flex items-center gap-1.5 rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-hover"
                    onClick={() => setCreateProjectModalOpen(true)}
                >
                  <Plus size={16} /> Create Project
                </button>
            )}
          </div>
        </div>

        {projects.length === 0 ? (
            <div className="relative mx-auto mt-8 max-w-xl rounded-2xl border border-border-soft bg-white p-10 text-center shadow-sm">
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-bg-secondary text-brand">
                <ClipboardList size={40} />
              </div>
              <h2 className="text-xl font-bold text-black">No projects yet</h2>
              <p className="mt-2 text-sm text-text-secondary">
                Start by creating your first project to get things rolling.
              </p>
              <button
                  className="mt-6 inline-flex items-center gap-1.5 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-hover"
                  onClick={() => setCreateProjectModalOpen(true)}
              >
                <Plus size={16} /> Create Project
              </button>
            </div>
        ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                  <ProjectCard
                      key={p.id}
                      project={p}
                      onClick={() =>
                          navigate({
                            to: '/board/$projectId',
                            params: { projectId: p.id },
                          })
                      }
                  />
              ))}
            </div>
        )}

        <CreateProjectModal />
      </div>
  )
}