import {FaLinkedin,FaTwitter,FaInstagram,FaGithub} from "react-icons/fa"
import {LuCopyright} from"react-icons/lu"
import logo from "../assets/logo.png"
function Footer() {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between bg-blue-950 text-white rounded-md p-2">
        <div>
            <img className="h-20" src={logo} alt="Nova-Logo" />
            <p>Work Smarter Together</p>
        </div>
        <div className='flex gap-5 justify-between my-2 '>
            <ul>
                <li className="font-bold"><h1>Product</h1></li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Integrations</li>
            </ul>
            <ul>
                <li className="font-bold"><h1>Company</h1></li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
            </ul>
            <ul>
                <li className="font-bold"><h1>Support</h1></li>
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="flex flex-col items-center justify-center my-2 " >
            <div className="flex gap-2">
            <FaLinkedin/>
            <FaTwitter/>
            <FaInstagram/>
            <FaGithub/>

            </div>
           <div className="flex gap-2">
            <LuCopyright className="my-1"/>
            {new Date().getFullYear()}
            <p><span>NOVA.</span> All rights reserved</p>
           </div>
            
        </div>
    </div>
    </>
  )
}

export default Footer