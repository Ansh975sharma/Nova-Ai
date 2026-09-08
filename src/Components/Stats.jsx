
import { LuUser,LuStar,LuListCheck,LuServer } from 'react-icons/lu'
function Stats() {
  return (
    <div className="flex flex-col md:flex-row justify-between text-center  border-black/10 bg-black/5 p-2 rounded-xl">
        <div className='my-4'>
            <LuUser  className="m-auto text-blue-700 my-1" />
            <h1>10K+</h1>
            <p>Active users</p>
        </div>
        <div className='my-4'>
            <LuListCheck className="m-auto text-blue-700 my=1"/>
            <h1>50M+</h1>
            <p>Tasks Completed</p>
        </div>
        <div className='my-4'>
            <LuServer className="m-auto text-blue-700 my-1"/>
            <h1>99.9%</h1>
            <p>Platform Uptime</p>
        </div>
        <div className='my-4'>
            <LuStar className="m-auto text-blue-700 my-1"/>
            <h1>4.9/5</h1>
            <p>Users Rating </p>
        </div>
    </div>
  )
}

export default Stats