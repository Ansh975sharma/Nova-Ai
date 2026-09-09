import { useState } from "react"
import logo from "../assets/logo.png"
function Navbar() {
    const [menu,setMenu]=useState(false)
  return (
 <>
 <div className=" relative flex items-center justify-between m-3">
    <div>
        <img className="h-20" src={logo} alt="Nova ai logo" />
    </div>
    
         <div className=' hidden md:flex gap-10'>
        <a href="#Home">Home</a>
        <a href="#features">Features</a>
        <a href="#About">About</a>
        <a href="#How it Works">How it Works</a>
        <a href="#Pricing">Pricing</a>
        <a href="#FAQ">FAQ</a>
     

    </div>
    
   
       <button className="md:hidden"
       onClick={()=>setMenu(!menu)}
       >
   ☰ 
</button>

{menu && (
     <div className=' absolute top-full right-16 mt-2 bg-white shadow-lg rounded-md p-4 flex flex-col gap-3 md:hidden'>
        <a href="#Home">Home</a>
        <a href="#features">Features</a>
        <a href="#About">About</a>
        <a href="#How it Works">How it Works</a>
        <a href="#Pricing">Pricing</a>
        <a href="#FAQ">FAQ</a>
     

    </div>
)}
    <div className="bg-blue-600 text-white rounded-md p-2">
        <button>Get Started</button>
    </div>
 </div>

 </>
  )
}

export default Navbar