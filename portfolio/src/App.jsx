import React from 'react'

import './App.css'
import Boiler from './Component/Boiler'
import Kp from './Component/Kp'
import Border from './Component/Border'
import Bottom from './Component/Bottom';
import Nnside from './Component/Nnside'
import Menu from './Component/Menu'
import {HashRouter , Routes ,Route} from 'react-router-dom'
import Edu from './Component/Edu'
import Contact from './Component/Contact'



function App() {
 
  return (
    
  <HashRouter>
  <Routes>

<Route path='/' element={<Boiler />}>
        </Route>
<Route path='/menu' element={<Menu/>}></Route>
<Route path='/education' element={<Edu/>}></Route>
<Route path='/cont' element={<Contact/>}></Route>

  </Routes>
  
  
  </HashRouter>
   
   
    
        
       
    
  )
}

export default App;
