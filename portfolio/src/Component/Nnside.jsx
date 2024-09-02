import React from 'react'
import img4 from './image/home.png'
function Inside() {
  return (
    <div>
      <div>
        <div className="border-2 border-black bg-slate-400 flex gap-4 w-[150px] items-center p-2 rounded-xl">
    
    <img className="w-[20px] h-[20px] " src={img4} alt="" />
    <span className="text-center font-semibold font-rale ">
           MENU
        </span>
    </div>
    <div className='w-[700px] justify-center flex' >
    <h1 className="font-rale font-semibold  text-5xl text-slate-200 mt-8   ">
    "The greater the obstacle, the
    <br />
    more <span className="text-green-400">glory</span> in <span className="text-green-400">overcoming</span> it."
    
   
    </h1>

    </div>

    <div className=' flex  justify-center w-[700px] mt-5  '>
    <h3 className="font-rale text-slate-400 mt-12 text-[14px] ">

    I’m a web developer with a passion for creating beautiful and functional websites. I have experience
    <br/>
     in HTML, CSS, JavaScript, and other web technologies. I’m always looking for new challenges and
     <br />
      opportunities to learn.
      <br />
<br />
I believe that the key to success in web development is to stay up-to-date with the latest trends and
<br />

 technologies. That’s why I’m constantly learning and experimenting with new tools and techniques.
<br />
<br />
If you’re looking for a web developer who is passionate about their work and committed to
<br />
 delivering high-quality results, then look no further!
    
    </h3>
    </div>
        </div>

    </div>
  )
}

export default Inside
