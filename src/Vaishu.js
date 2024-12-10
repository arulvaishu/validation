import React from 'react'

import App from './App'
import Login from './Login'
import {  BrowserRouter as Router,Routes,Route } from 'react-router-dom'


function Vaishu() {
  return (
    <div>
        <Router>
           <Routes>
            <Route path='/' element={<App/>}></Route>
            <Route path='/Login' element={<Login/>}></Route>
           </Routes>
        </Router>
        
      
    </div>
  )
}

export default Vaishu

