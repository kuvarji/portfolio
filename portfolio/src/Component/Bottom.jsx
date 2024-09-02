import React from "react";
import { Link } from "react-router-dom";
import img5 from './image/home (2).png'
import img6 from './image/menu.png'
import img7 from './image/document.png'
import img8 from './image/user.png'


function Bottom(){
   
    return(
        <>
        <center>
<div className=" border-2 flex justify-center  px-3 py-3 mb-2 md:rounded-lg rounded-xl border-slate-400 gap-24 md:gap-8 items-center">
   <Link to="/">
   <img className="w-[50px] h-[50px] md:w-[25px] md:h-[25px]" src={img5} alt="" />
   </Link>
     
<Link to="/menu">
<img className="w-[50px] h-[50px] md:w-[25px] md:h-[25px]" src={img6} alt="" />
</Link> 
<Link to="/education">
<img className="w-[50px] h-[50px] md:w-[25px] md:h-[25px]" src={img7} alt="" />
</Link>
<Link to="/cont">
<img className="w-[50px] h-[50px] md:w-[25px] md:h-[25px]" src={img8} alt="" />
</Link>

</div>
</center>
</>


    )
    

}
export default Bottom;