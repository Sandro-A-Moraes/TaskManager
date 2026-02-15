import {useTasks} from '../hooks/useTasks'
import TaskItem from './TaskItem'

const TaskList = () => {
  const {tasksList} = useTasks()

  return (
    <div className='flex flex-col gap-4'>
      {
        tasksList.map((task)=> (
            <TaskItem key={task.id } id={task.id} titulo={task.titulo} status={task.status} prioridade={task.prioridade} dataCriacao={task.dataCriacao}/>
        ))
      }
      
    </div>
  )
}

export default TaskList