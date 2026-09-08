import React from 'react'

function Features() {
  return (
    <div className="my-5">
        <div className="flex flex-col items-center my-5">
             <h1 className="text-2xl font-bold my-3">Powerful Features for Modren Teams</h1>
        <p className="text-center">Everything you need to stay productive ,collaborative seamlessly,
            <br />
            and achive more all in one place.

        </p>
        </div>
       
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  ">
            <div className="border rounded-md p-6  h-full hover:shadow-lg transition ">
               <h1 className='font-bold '>Ai task Automation</h1>
            <p className="">Let AI handle repetitive tasks so you can on what matters.</p>
            </div>

            <div className="border rounded-md p-6  h-full hover:shadow-lg transition 3"> 
               <h1 className='font-bold'>Analutics & Insights</h1>
            <p>Get clear insights and real-time data to make smarter buisness decisions.</p>
            </div>
            <div className="border rounded-md p-6  h-full hover:shadow-lg transition ">
               <h1 className='font-bold'>Team Collaboration</h1>
            <p>Work together seamlessly with your teamn from one centerlized workspace.</p>
            </div>
            <div className="border rounded-md p-6  h-full hover:shadow-lg transition ">
               <h1 className='font-bold'>Project Management</h1>
            <p>Plan, organize, and track your projects from start to finish.</p>
            </div>
            <div className="border rounded-md p-6  h-full hover:shadow-lg transition ">
               <h1 className='font-bold'>Workflow Automation</h1>
            <p>Create automated workflows that keep yours tasks moving without extra effort.</p>
            </div>
            <div className="border rounded-md p-6  h-full hover:shadow-lg transition ">
               <h1 className='font-bold'>Smart Planing</h1>
            <p>Plan your work efficiently with smart tools and intelligent recomendations.</p>
            </div>
        
            
        </div>
    </div>
  )
}

export default Features