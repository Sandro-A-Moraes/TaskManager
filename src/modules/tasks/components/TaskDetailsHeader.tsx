import { formatDateBR } from '../utils/formatDateBr'
import type { Priority } from '../types/tasks'
import { getPriorityIcon } from '../utils/getPriorityIcon'

type TaskDetailsHeaderProps = {
  title: string
  createdAt: string
  priority: Priority
}

const TaskDetailsHeader = ({ title, createdAt, priority }: TaskDetailsHeaderProps) => (
  <div className='bg-bg-purple-primary text-white p-7 rounded-t-2xl'>
    <div className='flex justify-around'>
      <p className='text-xl font-semibold text-left flex-3'>{title}</p>
      <p className='text-4xl flex-2 text-right pr-2'>{getPriorityIcon(priority)}</p>
    </div>

    <div className='flex items-center mt-4 gap-2'>
      <i className='fa-regular fa-calendar' />
      <p className='font-light'>Criada em {formatDateBR(createdAt)}</p>
    </div>
  </div>
)

export default TaskDetailsHeader
