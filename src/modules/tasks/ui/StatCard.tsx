import type {ReactNode} from 'react'

type StatCardProps = {
    title: string
    number: number
    icon: ReactNode
    colorBgIcon: string
    colorNumber: string

}



const StatCard = ({title, number, icon, colorBgIcon, colorNumber}: StatCardProps) => {
    
  return (
    <div className='border border-gray-100 rounded-xl shadow p-5 w-full flex justify-between items-center'>
        <div className='flex flex-col gap-1'>
            <p className='font-extralight'>{title}</p>
            <p className={`text-xl font-medium ${colorNumber}`}>{number}</p>
        </div>

        <div className={`w-12 h-12 flex items-center justify-center ${colorBgIcon} rounded-xl`}>
            {icon}
        </div>
    </div>
  )
}

export default StatCard