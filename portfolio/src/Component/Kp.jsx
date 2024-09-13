import React from "react";
import img4 from './image/home.png'


function Kp(params) {
    return(
        <>
        <div>
        <div className="border-2 border-black bg-slate-400 flex gap-4 w-[150px] items-center p-2 rounded-xl">
    
    <img className="w-[20px] h-[20px] " src={img4} alt="" />
    <span className="text-center font-semibold font-rale ">
            introduction
        </span>
    </div>

   
    <div className='w-[700px]  items-start flex '>
        <div>
    <h1 className="font-rale font-semibold  text-5xl text-slate-200  mt-8  ">
    Hello  There,
    
     I’m <span className="text-green-400">Kuvarji</span>,
    
    <br />
   FullStack Web Developer

    </h1>
    </div>
    </div>
  


   <div className="w-[700px]  item-start flex mt-20">
    <div className=" w-[450px]  ">
        
    <h1 className="font-rale text-slate-400  text-base">
    I code beautifully elegant simple things and I love what I do.
    <br />
Just keeping things simple like tha
    </h1>

    </div>
    </div>
        </div>

        
        </>
    );

} export default Kp;
