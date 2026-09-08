import React from 'react'

function Solutions() {
  return (
   <>
   <div className="text-center my-3">
    <div className="my-5">
            <h1 className="text-xl font-bold">Solutions for Every Team</h1>
    <p>Whether you're a startup,growing business,or large team...</p>
    </div>

    <div className="flex flex-col  md:flex-row justify-between ">
    <div className=" bg-black/3 m-3 px-2 rounded-xl">
        <p className="font-bold">Move Faster</p>
        <p>Manage projects,automate repetitive <br /> tasks,and keep your growing team focused <br /> on what matter most.</p>

    </div>
    <div className=" bg-black/3 m-3 px-2 rounded-xl">
        <p className="font-bold ">Collaborate Better</p>
        <p>Bring Your team, tasks and <br />communication together in one powerful <br /> workspace for  seamless collaboration.</p>
    </div>
    <div className=" bg-black/3 m-3 px-2 rounded-xl">
        <p className="font-bold">Work Smarter</p>
        <p>Get real-time insights, streamline <br /> workflows,and make better decisions with <br /> powerful productivity tools.</p>
    </div>
    </div>
    </div>
    </>
  )
}

export default Solutions