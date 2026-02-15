import { useNavigate, useParams } from 'react-router-dom'
import { useTasks } from '../hooks/useTasks'
import { formatDateBR } from '../utils/formatDateBr'
import type { Status } from '../types/tasks'

const statusStyles = {
  pendente: {
    border: 'border-orange-400',
    hover: 'hover:border-orange-300',
    bg: 'bg-orange-50',
    text: 'text-orange-600',
    icon: 'text-orange-500',
  },

  progresso: {
    border: 'border-blue-400',
    hover: 'hover:border-blue-300',
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    icon: 'text-blue-500',
  },

  concluida: {
    border: 'border-green-400',
    hover: 'hover:border-blue-300',
    bg: 'bg-green-50',
    text: 'text-green-600',
    icon: 'text-green-500',
  },
}


const getStatusClasses = (current: Status, button: Status) => {
  const isActive = current === button
  const styles = statusStyles[button]

  return `
    border  w-1/3 h-30 rounded-xl
    flex items-center justify-center
    transition-all duration-200 
    ${
      isActive
        ? `${styles.border} ${styles.bg} ${styles.text}`
        : `${styles.hover} border-gray-200`
    }
  `
}


const DetailsPage = () => {

  const { id } = useParams<{ id: string }>()
  const {getTaskById, loading} = useTasks()
  const navigate = useNavigate()

  if (!id) {
    return <p>Tarefa não encontrada</p>
  }

  if (loading) {
    return <p className='text-purple-600 text-2xl p-6'>Carregando...</p>
  }

  const task = getTaskById(id)
  
  if (!task) {
    return <p>Tarefa não encontrada</p>
  }

  return (
    <div className='p-6'>

      <button className='flex items-center gap-3 text-purple-800 group' onClick={()=>navigate('/')}>
        <i className="fa-solid fa-arrow-left text-xs group-hover:-translate-x-1 duration-100"></i>
        <p>Voltar para a lista</p>
      </button>

      {/* Seção de detalhes */}

      <div className='flex flex-col mt-6 rounded-2xl  shadow-xl'>
        
        <div className='bg-bg-purple-primary text-white p-7 rounded-t-2xl'>

          <div className='flex justify-around'>

            <p className='text-xl font-semibold text-left flex-3 '>{task.titulo}</p>
            <p className='text-4xl flex-2  text-right pr-2'>🔴</p>
          </div>

          <div className='flex items-center mt-4 gap-2'>
            <i className="fa-regular fa-calendar"></i>
            <p className='font-light'>Criada em {formatDateBR(task.dataCriacao)}</p>
          </div>

        </div>


        {/* Seção branca */}
        <div className='bg-white p-7 flex flex-col gap-6 rounded-b-2xl'>
          
          {/* Descrição */}
          <div className='flex flex-col gap-4'>

            <div className='flex items-center gap-2'>
              <div className=' bg-gray-100 w-8 h-8 rounded-lg flex items-center justify-center'>
                <i className="fa-solid fa-align-justify text-purple-600"></i>
              </div>

              <p className='text-lg'>Descrição</p>

            </div>

            <div className='bg-gray-100 w-full h-35 rounded-xl border border-gray-100 p-4 '>
              <p>{task.descricao}</p>
            </div>

          </div>
          
          {/* Status */}
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
              <div className='w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center'>
                <i className="fa-solid fa-bars-progress text-purple-600"></i>
              </div>

              <p className=' text-lg'>Status</p>

            </div>

            <div className='flex justify-around gap-3'>

              {/* Pendente */}
              <button className={getStatusClasses(task.status, 'pendente')}>

                <div className={`flex flex-col gap-2 items-center justify-center ${task.status === 'pendente' ? statusStyles.pendente.icon : 'text-gray-400'}`}>
                  <i className="fa-regular fa-clock text-xl "></i>
                  <p className='text-sm '>Pendente</p>
                </div>

              </button>
              
              {/* Progresso */}
              <button className={getStatusClasses(task.status, 'progresso')}>

                <div className={`flex flex-col gap-2 items-center justify-center ${task.status === 'progresso' ? statusStyles.progresso.icon : 'text-gray-400'}`}>

                  <i className="fa-solid fa-bars-progress text-xl "></i>
                  <p className='text-sm '>Progresso</p>

                </div>

              </button>

              {/* Concluída */}
              <button className={getStatusClasses(task.status, 'concluida')}>

                <div className={`flex flex-col gap-2 items-center justify-center ${task.status === 'concluida' ? statusStyles.concluida.icon : 'text-gray-400'}`}>

                  <i className="fa-regular fa-circle-check text-xl "></i>
                  <p className='text-sm '>Concluída</p>
                  
                </div>

              </button>

            </div>

            <div className='w-full bg-purple-50 border border-purple-100 p-3 rounded-lg'>
              <p className='font-light '>Status Atual: <span className='text-purple-700 font-normal'>{task.status}</span></p>
            </div>

          </div>

          {/* Prioridade */}
          <div className='flex flex-col gap-4'>

            <div className='flex items-center gap-2'>
              <div className='w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center'>
                  <i className="fa-regular fa-flag text-purple-600"></i>
              </div>
              
              <p className=' text-lg'>Prioridade</p>
            </div>
            
            <div className='flex gap-2 items-center px-4 py-6 bg-gray-50 border border-gray-100 rounded-xl'>
              <p className='text-2xl'>🔴</p>
              <p>{task.prioridade}</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default DetailsPage