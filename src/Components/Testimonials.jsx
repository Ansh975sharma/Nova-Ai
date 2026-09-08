import { LuStar,LuUser } from "react-icons/lu"

function Testimonials() {
  return (
    <>
        <div>
<div className="text-center">
            <p>
                Testimonials
            </p>
            <h1 className="text-3xl font-bold">Loved by <span className="text-blue-500">Modren Teams</span></h1>
            <p>See how teams are using Nova to improve productivity, simplify their <br />workflows,and get more dobne.</p>
            </div>
<div className="flex flex-col  md:flex-row md:justify-between  ">
<div>

    <h1 className="flex"> <LuUser/> <span>Rohan Mehta</span></h1>
    <p>Frontend Developer</p>
    <div className="flex"> 
         <LuStar/>
         <LuStar/>
         <LuStar/>
         <LuStar/>
        <LuStar/>
    </div>
   <p>"Nova has completely changed the way <br /> our team works. The interface is clean,br
   fast and super easy to use. we're way br more productive now!"</p>

</div>

<div>
    <h1> <LuUser/> <span>Rohan Mehta</span></h1>
    <p>Frontend Developer</p>
    <div className="flex"> 
         <LuStar/>
         <LuStar/>
         <LuStar/>
         <LuStar/>
        <LuStar/>
    </div>
   <p>"Nova has completely changed the way <br /> our team works. The interface is clean,br
   fast and super easy to use. we're way br more productive now!"</p>

</div>
<div>
    <h1> <LuUser/> <span>Rohan Mehta</span></h1>
    <p>Frontend Developer</p>
    <div className="flex"> 
         <LuStar/>
         <LuStar/>
         <LuStar/>
         <LuStar/>
        <LuStar/>
    </div>
   <p>"Nova has completely changed the way <br /> our team works. The interface is clean,br
   fast and super easy to use. we're way br more productive now!"</p>

</div>
</div>
        </div>
    </>

  )
}

export default Testimonials