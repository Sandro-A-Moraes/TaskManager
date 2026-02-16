import {useState} from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)


  return (
    <div>
        <div className='flex items-center justify-between p-4 shadow'>

          <div className='flex items-center gap-2'>
            <div className='bg-bg-purple-primary p-1 rounded-xl'>
              <i className="fa-regular fa-square-check text-white text-lg"></i>
            </div>

            <p>Task Manager</p>
          </div>

          <button className='hover:bg-gray-100 hover:transition-all hover:ease-in-out hover:delay-75 p-2 rounded-lg cursor-pointer' onClick={()=> setMenuOpen(!menuOpen)}>
            <i className="fa-solid fa-bars text-xl text-bg-purple-primary"></i>
          </button>

        </div>

        {/* menu */}

        <div className={` overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-60 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'}`}>

          <div className="flex flex-col p-5 gap-3">

            <NavLink to="/" className={({ isActive }) => `flex items-center gap-2 p-3 rounded-lg ${ isActive ? 'bg-bg-purple-primary text-white' : 'transition-colors duration-200 hover:bg-gray-100' }`}>

              <i className="fa-solid fa-list"></i>
              <p>Lista de Tarefas</p>

            </NavLink>

            <NavLink to="/create" className={({ isActive }) => `flex items-center gap-2 p-3 rounded-lg ${ isActive ? 'bg-bg-purple-primary text-white' : 'transition-colors duration-200 hover:bg-gray-100'}`}>

              <i className="fa-solid fa-plus"></i>
              <p>Nova Tarefa</p>

            </NavLink>

          </div>

        </div>

        <Outlet/>
    </div>
  )
}

export default Layout