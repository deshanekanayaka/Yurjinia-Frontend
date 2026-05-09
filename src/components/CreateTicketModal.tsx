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
import { useProjectStore } from '@/store/projectStore'

const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  priority: z.enum(['High', 'Medium', 'Low']),
  assigneeId: z.string().min(1, 'Assignee is required'),
})

type FormData = z.infer<typeof schema>

interface CreateTicketModalProps {
  projectId: string
}

export function CreateTicketModal({ projectId }: CreateTicketModalProps) {
  const { isCreateTicketModalOpen, setCreateTicketModalOpen, activeTicketColumnStatus, addTicket } =
    useProjectStore()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { priority: 'Medium' },
  })

  function onSubmit(data: FormData) {
    // TODO: call addTicket with projectId, status from activeTicketColumnStatus, and form data
    // then reset() and close modal
  }

  return (
    <Dialog
      open={isCreateTicketModalOpen}
      onOpenChange={(open) => {
        setCreateTicketModalOpen(open)
        if (!open) reset()
      }}
    >
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Add Ticket</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="e.g. Fix login bug"
              {...register('title')}
            />
            {errors.title && (
              <p className="text-xs text-red-500">{errors.title.message}</p>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="priority">Priority</Label>
            <select
              id="priority"
              {...register('priority')}
              className="flex h-10 w-full rounded-lg border border-border-soft bg-white px-3 py-2 text-sm outline-none focus:border-brand"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className="space-y-1">
            <Label htmlFor="assigneeId">Assignee</Label>
            <Input
              id="assigneeId"
              placeholder="e.g. Jane Cooper"
              {...register('assigneeId')}
            />
            {errors.assigneeId && (
              <p className="text-xs text-red-500">{errors.assigneeId.message}</p>
            )}
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setCreateTicketModalOpen(false)
                reset()
              }}
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-brand text-white hover:bg-brand-hover">
              Add Ticket
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
