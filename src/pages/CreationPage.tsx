import React from 'react'
import TaskForm from '../components/TaskForm'

const CreationPage = () => {
  return (
    <div className='p-6'>
      <div className='my-3 flex flex-col gap-2'>
        <h1>Criar Nova Tarefa</h1>
        <p className='font-extralight'>Preencha as informações abaixo para adicionar uma nova tarefa</p>
      </div>

      <TaskForm/>
    </div>
  )
}

export default CreationPage