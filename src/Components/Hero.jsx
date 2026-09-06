import React from 'react'
import dashboard from "../assets/dashboard.png"
function  Hero() {
  return (
   <>
   <div className="flex gap-20 justify-between my-4">
    <div className='w-100'>
        <button className="bg-gray-200 rounded-xl px-3 text-violet-500 ">Ai-Powered Productivity</button>
        <div className="my-5">
        <h1 className="text-5xl font-bold">Build Better.</h1>
        <h1 className="text-5xl font-bold">Work Smarter.</h1>

        <p className="text-md my-5">NOVA helps teams manage projects,automate tasks and work together more efficently.</p>
        <div className="flex gap-5 my-6">
        <button className="bg-blue-600 rounded-md p-3 text-white">Get Started </button>
        <button className="bg-white border border-black outline-black rounded-md p-3">Explore Now</button>
        </div>
    </div>
    </div>
    <div>
<img  className="h-120 w-200" src={dashboard} alt="Dashboard-picture" />
    </div>
   </div>
   </>
  )
}

export default Hero