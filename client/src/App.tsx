import React from 'react'
import './Global.css'
import Home from './Components/Home/Home'
import Register from './Components/Register/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
   <>
    <Router>
      <Routes>
 <Route path="/" element={<Home />} />
  <Route path="/register" element={<Register />} />

      </Routes>
      </Router>
  
  
   </>
  );
}

export default App
