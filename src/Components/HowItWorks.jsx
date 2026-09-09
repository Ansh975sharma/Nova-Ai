import {LuArrowRight,LuArrowDown} from "react-icons/lu"

function HowItWorks() {

  
    
  
  return (
<>
<section id="HowitWorks">
<div>
    <div className="text-center">
         <h1 className="text-2xl  font-bold">How it Works </h1>
    <p>Get started in just 3 simple steps</p>
    </div>
   
    <div className="flex flex-col md:flex-row justify-between my-5" >
        <div className="text-center">
              <h1 className="w-10 h-10 bg-blue-800 rounded-full m-auto text-white  flex items-center justify-center font-bold">1</h1>
       <p className="font-bold">Create your Work</p>
       
        <p>Set up your workspace <br />  and customize it for your needs.</p>
        </div>
<LuArrowRight className=" hidden md:block my-7"/>
<LuArrowDown className=" m-auto my-4 md:hidden"/>
        <div className="text-center">
                    <h1 className="w-10 h-10 bg-blue-800 rounded-full m-auto text-white  flex items-center justify-center font-bold">2</h1>
             <p className="font-bold">Add Your teams</p>
            <p>Invite your team members <br /> and start collaborating together</p>

        </div>
        <LuArrowRight className=" hidden md:block my-7"/>
        <LuArrowDown className=" m-auto my-4 md:hidden"/>
        <div className="text-center">
          <h1 className="w-10 h-10 bg-blue-800 rounded-full m-auto text-white  flex items-center justify-center font-bold">3</h1>
       
        <p className="font-bold">Start Working Smarter</p>
       
        <p>Use NOVA's powerful <br /> tools  to get more done,together</p>
</div>
    </div>
</div>
</section>

</>
  )
}

export default HowItWorks