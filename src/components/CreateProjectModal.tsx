import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useProjectStore } from '@/store/projectStore'

const schema = z.object({
  name: z.string().min(1, 'Project name is required'),
  description: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export function CreateProjectModal() {
  const { isCreateProjectModalOpen, setCreateProjectModalOpen, createProject } =
    useProjectStore()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  function onSubmit(data: FormData) {
    createProject(
        {
          name: data.name,
          description: data.description ?? ''
        }
    )
    reset()
  }

  return (
    <Dialog
      open={isCreateProjectModalOpen}
      onOpenChange={(open) => {
        setCreateProjectModalOpen(open)
        if (!open) reset()
      }}
    >
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Create Project</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="name">Project Name</Label>
            <Input
              id="name"
              placeholder="e.g. Marketing Site"
              {...register('name')}
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="What is this project about?"
              rows={3}
              {...register('description')}
            />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setCreateProjectModalOpen(false)
                reset()
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-brand text-white hover:bg-brand-hover"
            >
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
