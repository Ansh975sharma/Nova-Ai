import React from 'react'
import {LuCheck } from "react-icons/lu"
function Pricing() {
  return (
  <>
  <section id="Pricing">
<div>
    <div className="text-center mb-5">
    <p ><span className="bg-blue-100 rounded-xl px-3 text-blue-500 font-bold">Pricing</span> </p>
    <h1 className="text-2xl font-bold">Simple, Transparent <span className="text-blue-500">Pricing</span></h1>
        <p>Choose the plan that fits your team's needs.  No hidden fees, <br />no surprise</p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
      
        <div className="border hover:border-blue-700 hover:shadow-md transition hover:bg-blue-50 rounded-md p-3">
            <p className="font-bold">Free</p>
            <p className="text-gray-600 ">Prefect for small teams & individuals</p>
            <p className="mt-2 "><span className='text-xl font-bold'>$0</span >  /month</p>
            <ul>
                <li className="flex "> <span className="mt-2"><LuCheck className="text-blue-500" /> </span> up to 3 team member</li>
                <li className="flex"> <span className="mt-1"><LuCheck className="text-blue-500" /> </span> Basic features</li>
                <li  className="flex"> <span className="mt-1"><LuCheck className="text-blue-500" /> </span> 5 GB storage</li>
            </ul>
            <button className="border w-full hover:bg-blue-700 hover:text-white rounded-md">Get Started</button>
        </div>
        <div className="border hover:border-blue-700 hover:bg-blue-50 rounded-md p-3">
            <p className="font-bold">Pro</p>
            <p className="text-gray-600 ">For growing teams</p>
            <p className="mt-2 "><span className='text-xl font-bold'>$12</span >  /month</p>
            <ul>
                <li className="flex "> <span className="mt-2"><LuCheck className="text-blue-500" /> </span> up to 10 team members</li>
                <li className="flex"> <span className="mt-1"><LuCheck className="text-blue-500" /> </span> Advance features</li>
                <li  className="flex"> <span className="mt-1"><LuCheck className="text-blue-500" /> </span> 50 GB storage</li>
                <li  className="flex"> <span className="mt-1"><LuCheck className="text-blue-500" /> </span> Prioirty support</li>
            </ul>
            <button className="border w-full hover:bg-blue-700 hover:text-white rounded-md">Get Started</button>
        </div>

          <div className="border hover:border-blue-700 hover:bg-blue-50 rounded-md p-3">
            <p className="font-bold">Business</p>
            <p className="text-gray-600 ">For large teams & organizations</p>
            <p  className='text-xl font-bold mt-2'>Custom  </p>
            <ul>
     <li className="flex "> <span className="mt-2"><LuCheck className="text-blue-500" /> </span> ultimate team members</li>
                <li className="flex"> <span className="mt-1"><LuCheck className="text-blue-500" /> </span> All features</li>
                <li  className="flex"> <span className="mt-1"><LuCheck className="text-blue-500" /> </span> 200GB storage</li>
                <li  className="flex"> <span className="mt-1"><LuCheck className="text-blue-500" /> </span> Dedicated Support</li>

            </ul>
            <button className="border w-full hover:bg-blue-700 hover:text-white rounded-md">Get Started</button>
        </div>
        
     
        <div className="border hover:border-blue-700 hover:bg-blue-50 rounded-md p-3">
            <p className="font-bold">Enterprise</p>
            <p className="text-gray-600 ">For coustom needs</p>
            <p  className='text-xl font-bold mt-2'>Custom  </p>
            <ul>
                <li className="flex "> <span className="mt-2"><LuCheck className="text-blue-500"  /> </span> Everything in business</li>
                <li className="flex"> <span className="mt-1"><LuCheck className="text-blue-500" /> </span> Custom integrations</li>
                <li  className="flex"> <span className="mt-1"><LuCheck className="text-blue-500" /> </span> Dedicated account manager</li>
                <li  className="flex"> <span className="mt-1"><LuCheck className="text-blue-500" /> </span> SLA & pricity support</li>
            </ul>
            <button className="border w-full hover:bg-blue-700 hover:text-white rounded-md">Get Started</button>
        </div>
    </div>
    
  </div>
  </section>
  
  </>
  )
}

export default Pricing