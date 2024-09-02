import React from "react";
import Bottom from './Bottom';

function Come() {
    return
    (
    

        <div className="w-[950px] h-[550px]  border-slate-400 rounded-3xl ">
        <div className="border-2 border-black bg-slate-400 flex gap-4 w-[150px] items-center p-2 rounded-xl">
            
        <img className="w-[20px] h-[20px] " src="" alt="" />
        <span className="text-center font-semibold font-rale ">
                introduction
            </span>
        </div>
        
        <h1 className="font-rale font-semibold  text-5xl text-slate-200 mt-12   ">
        Hello  There,
        
         I’m <span className="text-green-400">Kuvarji</span>,
        
         <br />
        Web Developer and
        <br />
         Software Engineer
        </h1>
        <div className="mt-24 w-[400px] ">
        <span className="font-rale text-white mt-12 text-xs">
        I code beautifully elegant simple things and I love what I do.
        Just keeping things simple like that!
        </span>
        <center>
        <div className="mt-28 ml-52">
        <Bottom/>
        </div>
        </center>
        </div>
            </div>
    
    );
    
}

export default Come;