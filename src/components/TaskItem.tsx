import { useNavigate} from 'react-router-dom'
import type { Priority, Status } from '../types/tasks'
import { formatDateBR } from '../utils/formatDateBr'

type TaskItemProps = {
  id: string,
  titulo: string,
  status: Status,
  prioridade: Priority,
  dataCriacao: string
}

const chooseColorStatus = (status: Status)=>{
  if(status === 'concluida'){
    return 'bg-green-50 text-green-700 border border-green-300'
  }

  if(status === 'progresso'){
    return 'bg-blue-50 text-blue-700 border border-blue-300'
  }

  if(status === 'pendente'){
    return 'bg-yellow-50 text-orange-800 border border-yellow-300'
  }

}

const chooseColorPrioridade = (prioridade: Priority)=>{
  if(prioridade === 'alta'){
    return 'bg-red-50 text-red-700 border border-red-300'
  }

  if(prioridade === 'media'){
    return 'bg-orange-50 text-orange-700 border border-orange-300'
  }

  if(prioridade === 'baixa'){
    return 'bg-gray-50 text-gray-700 border border-gray-300'
  }

}

const TaskItem = ({id, titulo, status, prioridade, dataCriacao}: TaskItemProps) => {
  const navigate = useNavigate()
  
  return (
    <div className='flex items-center justify-between bg-white shadow-md p-6 rounded-xl border border-gray-100 min-h-50 hover:border-purple-300 transition-all delay-100 group' 
    onClick={()=>navigate( `details/${id}` )}>

      <div className='flex flex-col gap-6'>
        <p className='group-hover:text-purple-800 transition-all delay-75'>{titulo}</p>

        <div className='flex gap-5'>
          <div className={`flex items-center justify-center p-2  rounded-lg ${chooseColorStatus(status)}`}>{status}</div>
          <div className={`flex items-center justify-center p-2  rounded-lg ${chooseColorPrioridade(prioridade)}`}>Prioridade: {prioridade}</div>
        </div>

        <div className='flex items-center gap-2 justify-around p-2 bg-gray-100 border border-gray-200 w-33 rounded-xl'>
          <i className="fa-regular fa-clock text-gray-500"></i>
          <p className='text-gray-700'>{formatDateBR(dataCriacao)}</p>
        </div>

      </div>

      <button className='bg-gray-100 self-start p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out'>
        <i className="fa-solid fa-arrow-right text-purple-600"></i>
      </button>

    </div>
  )
}

export default TaskItem