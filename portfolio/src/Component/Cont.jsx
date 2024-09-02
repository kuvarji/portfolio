import React from 'react'
import { useState } from 'react'
import img4 from './image/home.png'
import axios from 'axios'
function Cont() {

    const [ name , setName]= useState()
    const [ mobile , setMobile]= useState()
    const [ add , setAdd]= useState()

const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post("https://portfolio-server-9o8j.onrender.com/contact", {name , mobile, add})
    .then(result => console.log(result.data))
   
    .catch(err => console.log(err))
}


  return (
    <div>
       <div>
        <div className="border-2 border-black bg-slate-400 flex gap-4 w-[150px] items-center p-2 rounded-xl">
    
    <img className="w-[20px] h-[20px] " src={img4} alt="" />
    <span className="text-center font-semibold font-rale ">
    Contact
        </span>
    </div>
    <div className='w-[700px]  flex' >
    <h1 className="font-rale font-semibold  text-5xl text-slate-200 mt-8 md:mt-[5px]   ">
    
   
    <span className="text-green-400">Contact</span> 
    
   
    </h1>

    </div>




    <div className='   w-[700px]  '>
  
    <div className="w-[700px]   rounded-md shadow-md">
     
      <form onSubmit={handleSubmit} >
        <div className="mb-2 mt-2">
          <label htmlFor="name" className="block text-white font-thin font-rale mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
          onChange={(e)=>setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-800 text-slate-400 font-rale text-base font-semibold rounded-md bg-black focus:outline-none focus:border-green-600"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="mobileNumber" className="block  text-white font-rale font-thin mb-2">Mobile Number</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            onChange={(e)=>setMobile(e.target.value)}
            className="w-full px-3 py-2 border border-gray-800 text-slate-400 font-rale text-base font-semibold rounded-md bg-black focus:outline-none focus:border-green-600"
            placeholder="Enter your mobile number"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="address" className="block  text-white font-rale font-thin mb-2">Address</label>
          <textarea
            id="address"
            name="address"
            onChange={(e)=>setAdd(e.target.value)}
            className="w-[700px] px-3 py-2 border border-gray-800 text-slate-400 font-rale text-base font-semibold rounded-md bg-black focus:outline-none focus:border-green-600"
            placeholder="Enter your address"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-green-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300">Submit</button>
      </form>
    </div>
        




    </div>
      
</div>
    </div>
  )
}

export default Cont
