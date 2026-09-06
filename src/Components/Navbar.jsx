import React from 'react'
import logo from "../assets/logo.png"
function Navbar() {
  return (
 <>
 <div className="flex items-center justify-between m-3">
    <div>
        <img className="h-20" src={logo} alt="Nova ai logo" />
    </div>
    <div className='flex gap-10'>
        <a href="Home">Home</a>
        <a href="features">Features</a>
        <a href="About">About</a>
        <a href="How it Works">How it Works</a>
        <a href="Pricing">Pricing</a>
        <a href="FAQ">FAQ</a>

    </div>
    <div className="bg-blue-600 text-white rounded-md p-2">
        <button>Get Started</button>
    </div>
 </div>

 </>
  )
}

export default Navbar