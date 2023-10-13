import logo from './logo.svg';
import './App.css';
import "./App.css";
import nature from "./images/img1.jpeg";
// import './Css/bootstarp.css';
// import './Css/bootstarp.css';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Navdown from "./components/Navdown";
import Maincontnet from "./components/Maincontnet";
import Shorts from "./components/Shorts";
import { createContext } from 'react';
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Home from './components/Home';
import React, { useContext, useEffect } from 'react';
export const store=createContext();
function App() {
  let arr=[
    {name:"sushma",
    roll:"5N2",
    branch:"CSE"
  },
    {
      name:"abhi",
    roll:"5O9",
    branch:"CSE"
    }
  ];
  const[data,setData]=useState(arr);
  let [count , setcount]=useState(1);
  let[num,setNum]=useState(count);
  useEffect(() => {
    // Update the 'num' state whenever 'count' changes
    setNum(count);
  }, [count]);

  const contextValue = {
    num,
    data,
  };
  return (
    <>
    <BrowserRouter>
      <store.Provider value={[num,setNum]}>
    <div className='container-fluid'>
        <div className='row'>
            <Sidebar/>
            <div className='col-md-10 col-sm-10 col-xs-10 col-lg-10'>
                <Navbar/>
                <Navdown/>
                {/* <Maincontnet data={arr}/> */}
                {/* <Home/> */}
                {/* <Shorts/> */}
                <Routes>
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/Shorts" element={<Shorts/>}/>
                    <Route path="/Users" element={<Maincontnet data={arr}/>}/>
                </Routes>
                {/* <h1>{count}</h1> */}
                <div className='mt-2' >
                <button onClick={()=>setcount(count+1)} className='btn btn-danger'>click</button>
                <button onClick={()=>setcount(count-1)} className='btn btn-danger'>remove</button>
                </div>
            </div>
            
        </div>
        
    </div>
    </store.Provider>
    </BrowserRouter>
    </>
  )
}

export default App;
