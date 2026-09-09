import {LuArrowRight} from "react-icons/lu"

function CTA() {
  return (
   <>
   <div className="bg-blue-500 rounded-md p-2 text-white flex justify-between my-5">
    <div>
        <p ><span className="bg-white/20 px-1 rounded-xl"> Get Started</span></p>
        <h1 className="text-xl ">Ready to boost your productivity?</h1>
        <p>join thousand of teams already using NOVA to work smarter,not harder.</p>
    </div>
    <div>
        <button className="flex my-8 bg-white text-black rounded-md p-1 hover:shadow-md transition">Start Free Trial <span className="flex items-center mx-2"><LuArrowRight/></span></button>
    </div>
   </div>
   </>
  )
}

export default CTA