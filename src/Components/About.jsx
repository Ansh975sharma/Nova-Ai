import React from 'react'
import aboutImage from "../assets/aboutImage.jpeg"
import {LuCheck} from "react-icons/lu"
function About() {
  return (
   <>
   <section id="About">
 <div className="flex flex-col  md:flex-row justify-between">
    <div >
        <button className="text-blue-500 border rounded-2xl bg-gray-200 px-1">About Nova</button>
        
        <p className="font-bold text-xl my-2">Built for modren teams and growing <br /> businesses</p>
        <p className="my-2  md:text-center">
            Nova helps your team stay organised, collaborate <br /> better and work faster.

        </p>
        <div >
             <ul >
            <li className="flex"><LuCheck className="m-1" /> <span>Easy to use</span></li>
   <li className="flex"><LuCheck className="m-1" /> <span>Secure & reliable</span></li>
   <li className="flex"><LuCheck className="m-1" /> <span>Built for teams</span></li>
        </ul>
        </div>
       
        <button className="text-white border rounded-md bg-blue-900 px-2 my-2 ">Learn More</button>
    </div>
    <div >
        <img className="w-full mx-w-2xl h-80 my-2 " src={aboutImage} alt="About" />
    </div>
   </div>
   </section>
  
   </>
  )
}

export default About