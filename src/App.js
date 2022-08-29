
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import Home from './components/Home';
import Reservation from './components/Reservation';
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import './App.css';
import React, {useState, useEffect} from 'react';






function App() {
  return (
    <div className="App">
    
     
   
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/reservation" element={<Reservation/>}/>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
    
      </Routes>

    </div>
  );
}

export default App;
