import React from "react";
import img1 from "./image/me.jpg"
import img2 from "./image/instagram (2).png"
import img3 from"./image/email.png"

function Border() {
    return(
        <>
        
<div className="">

 <div className="w-[750px]   h-[850px] md:w-[350px] px-20 md:px-0 md:h-[550px] bg-black border-2 md:bg-black border-slate-700 md:rounded-3xl justify-center ">

<h1 className=" font-rale   text-7xl  text-slate-200 font-bold mt-12 md:font-rale md:ml-10 md:text-2xl md:text-slate-200 md:font-bold md:mt-6">
Kuvarji Gupta
</h1>
<h4 className="font-rale  text-2xl ml-10 mt-2   text-slate-200 font-bold  md:font-rale  md:text-base md:ml-20 md:mt-1   md:text-slate-200 md:font-bold ">
    Web Developer
</h4>

<div className=" flex justify-center mt-3 gap-16 md:gap-4  ">
    <center>
<img className="md:w-[200px] w-[400px] h-[400px] md:h-[200px] rounded-2xl object-cover" src={img1} alt="" />
</center>

{/* image */}
<div className="flex justify-around gap-4 ">
<div className="w-[80px] md:w-[50px] md:h-[200px]  h-[200px]  flex-col md:flex-col">
    <center>
<img className=" w-[90px] md:w-[30px] bg-black rounded-full border-2 border-green-800 p-1" src={img2} alt="" />
<br />
<img className=" w-[90px] md:w-[30px] bg-black rounded-full border-2 border-green-800  p-1" src={img2} alt="" />
<br />
<img className=" w-[90px] md:w-[30px] bg-black rounded-full border-2 border-green-800  p-1" src={img2} alt="" />
<br />
<img className=" w-[90px] md:w-[30px] bg-black rounded-full border-2 border-green-800  p-1" src={img2} alt="" />

</center>
</div>
<div className="border-2 border-spacing-y-2 border-green-500 inline">
</div>

</div>

{/* iamge */}



{/* image div */}
</div>
<div className=" mt-5   md:mt-5 md:pl-9">
<span className="font-rale text-slate-300 text-center font-semibold text-2xl md:text-sm">
    kuvarjigupta2004@gmail.com
</span>
</div>

<div className=" mt-5   md:mt-5 md:pl-9">
<span className="font-rale text-slate-300 font-semibold text-center text-base">
   Lucknow,U.P,India
</span>
</div>


<div className=" mt-5   md:mt-5 md:pl-9">
<span className="font-rale text-slate-300 font-thin text-center text-xs">
© 2023 Kuvarji. All Right Reserved
</span>
</div>

<div className=" mt-10 md:flex md:justify-center">

    <button className=" flex justify-center gap-4 bg-green-400 w-[500px] md:w-[200px] p-3 rounded-2xl font-rale font-semibold  ">
    <img className="w-[20px] h-[20px]" src={img3} alt="" />
Contact Me
    </button>

</div>

{/* boreder div */}
    </div>
    </div>

        
        </>
    );
}
export default Border;
