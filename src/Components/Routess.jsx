import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from '../Pages/Home/Home';
import Auth from '../Pages/Auth/Auth';
import Quetions from "../Pages/Quetions/Quetions";
import AskQuestion from '../Pages/AskQuestion/AskQuestion';
import DisplayQuestion from '../Pages/Quetions/DisplayQuestion';
const Routess = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/auth" element={<Auth/>}/>
      <Route path="/Quetions" element={<Quetions/>}/>
      <Route path="/AskQuestion" element={<AskQuestion/>}/>
      <Route path="/Questions/:id" element={<DisplayQuestion/>}/>
    </Routes>
  )
}

export default Routess