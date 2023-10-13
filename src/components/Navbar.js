import React from 'react'
import { store } from '../App';
import { useContext, useEffect } from 'react';
export default function Navbar() {
     const[num,setNum]=useContext(store);
     const imageUrl = 'https://yt3.googleusercontent.com/ytc/APkrFKaqca-xQcJtp1Pqv-APucCa0nToHYGPVT00YBGOSw=s176-c-k-c0x00ffffff-no-rj';
  return (
    <>
    <div className='row mt-2' >
        <div className='col-md-1'>
            <br></br>
        </div>
        <div className='col-md-6'>
            <div className='row mt-3' id="inp1">
                <div className='col-md-11'><input type='text' id='inp' placeholder='Search' className='mt-1'></input></div>
                <div className='col-md-1 pt-1' id="search-sym"><i class="fa-solid fa-magnifying-glass"></i></div>
            </div>
        </div>
        <div className='col-md-1' >
                <div className='mt-3 pt-1 back-grey'><i class="fa-solid fa-microphone fa-lg"></i></div>
        </div>
        <div className='col-md-4 mt-3'>
            <div className='row'>
            <div  className='col-md-5'></div>
            <div className='col-md-2'><i class="fa-solid fa-video fa-lg"></i></div>
            <div className='col-md-2'><i class="fa-regular fa-bell fa-lg"></i><div class="numdiv">{num}+</div></div>
            <div className='col-md-2'><i class="fa-solid fa-user fa-lg"></i></div>
            <div className='col-md-1'></div>
            </div>
        </div>
         
    </div>
    </>
  )
}
