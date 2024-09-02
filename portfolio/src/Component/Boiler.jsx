import React from "react";
import Kp from "./Kp"
import Border from './Border'
import Bottom from './Bottom'
function Boiler({heading}) {
    return(
<>

<div className=" w-screen h-screen   align-middle md:flex flex-none   items-center  md:pl-16 md:gap-20     ">
    <Border/>

 <div className="w-[750px] h-[700px] md:w-[950px] px-10 py-5 md:h-[550px] bg-black border-slate-400 md:rounded-3xl  relative ">

<Kp  />
<div className="md:flex md:justify-center md:items-center flex justify-center  items-center">
    <div className="  mt-28 absolute  bottom-[30px]  md:mt-28   md:absolute md:bottom-0">
     
    <Bottom/>
   
    </div>
    </div>

</div>
</div>
{/* last div */}




</>
    );
}
export default Boiler;