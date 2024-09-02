import React from 'react'
import img4 from './image/home.png'
function Edi() {
  return (
    <div>
      <div>
        <div className="border-2 border-black bg-slate-400 flex gap-4 w-[150px] items-center p-2 rounded-xl">
    
    <img className="w-[20px] h-[20px] " src={img4} alt="" />
    <span className="text-center font-semibold font-rale ">
           Education
        </span>
    </div>
    <div className='w-[700px]  flex' >
    <h1 className="font-rale font-semibold  text-5xl text-slate-200 mt-8   ">
    
    Education & 
    <span className="text-green-400"> Experience</span> 
    
   
    </h1>

    </div>

    <div className='  w-[700px] mt-10 '>
  
        
<div className='flex gap-8  items-center  '>
    <div className='w-2 h-2 rounded-full bg-white'></div>
   <h1 className='text-white text-start font-normal'>2019-2021</h1> 
    
</div>



<div className='border-l-2 gap-5 flex items-center ml-[3px]'>

<div className='ml-8'>

<div  className=' text-3xl text-slate-50 font-rale font-thin mt-2' >
<h1>Class X</h1>
</div>


<div  className=' text-3xl text-slate-50 font-rale font-thin mt-3' >
<h1>Class XII</h1>
</div>

</div>

</div>

<div className='mt-2'>
<div className='flex gap-8 items-center '>
    <div className='w-2 h-2 rounded-full bg-white'></div>
   <h1 className='text-white text-start font-normal'>2022 -Present</h1> 
    
</div>

<div className='border-l-2 h-20 gap-5 ml-[3px]'>

<div className='ml-8'>

<div  className=' text-3xl text-slate-50 font-rale font-thin pt-4' >
<h1 >Bachelor Of Technology (CSE)</h1>
</div>



</div>
</div>
</div>

    </div>
      
</div>
    </div>
  )
}

export default Edi