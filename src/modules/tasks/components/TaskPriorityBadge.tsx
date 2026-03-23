import type { Priority } from '../types/tasks'
import { getPriorityIcon } from '../utils/getPriorityIcon'

type TaskPriorityBadgeProps = {
  priority: Priority
}

const TaskPriorityBadge = ({ priority }: TaskPriorityBadgeProps) => (
  <div className='flex gap-2 items-center px-4 py-6 bg-gray-50 border border-gray-100 rounded-xl'>
    <p className='text-2xl'>{getPriorityIcon(priority)}</p>
    <p>{priority}</p>
  </div>
)

export default TaskPriorityBadge
