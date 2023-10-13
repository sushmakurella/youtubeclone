import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
function Sidebar() {
    const imageUrl = 'https://yt3.googleusercontent.com/ytc/APkrFKaqca-xQcJtp1Pqv-APucCa0nToHYGPVT00YBGOSw=s176-c-k-c0x00ffffff-no-rj';
  return (
    < >
    <div className='col-md-2 scrollbar fxd'>
        <div className='row mt-2 mb-3'>
            <div className='col-md-1 mt-2'><i class="fa-solid fa-bars" id="bars"></i></div>
            <div className='col-md-2 mt-2'><img src={logo} width='35' /></div>
            <div className='col-md-6'><h3 className='mt-2 hfont'>YOUTUBE</h3></div>   
        </div>
        <div>
             <Link to="Home">
           <div className='row hdiv ' style={{textDecoration:"none",color:"black"}}>
          
            <div className='col-md-1'> 
                    <i class="fa-solid fa-house"></i>
                </div>
                <div className='col-md-4'>
                    <p>Home</p>
                </div>
            
           </div>
           </Link> 
           <Link to="Shorts">
           <div className='row hdiv ' style={{textDecoration:"none",color:"black"}}>
             
                <div className='col-md-1'> 
                   <i class="fa-solid fa-bolt"></i>
                </div>
                <div className='col-md-6'>
                    <p>Shorts</p>
                </div>
              
           </div>
           </Link>
           <Link to="Users">
           <div className='row hdiv ' style={{textDecoration:"none",color:"black"}}>
          
            <div className='col-md-1'> 
                    <i class="fa-solid fa-house"></i>
                </div>
                <div className='col-md-4'>
                    <p>Users</p>
                </div>
            
           </div>
           </Link> 
           <div className='row hdiv '>
                <div className='col-md-1'> 
                    <i class="fa-solid fa-clapperboard"></i>
                </div>
                <div className='col-md-6'>
                    <p>Subsription</p>
                </div>
           </div>
           <hr></hr>
           <div className='row hdiv '>
                <div className='col-md-1'> 
                    <i class="fa-regular fa-bookmark"></i>
                </div>
                <div className='col-md-6'>
                    <p>Library</p>
                </div>
           </div>
           <div className='row hdiv '>
                <div className='col-md-1'> 
                    <i class="fa-solid fa-clock-rotate-left"></i>
                </div>
                <div className='col-md-6'>
                    <p>History</p>
                </div>
           </div>
           <div className='row hdiv '>
                <div className='col-md-1'> 
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div className='col-md-6'>
                    <p>Liked Vedios</p>
                </div>
           </div>
           <div className='row hdiv '>
                <div className='col-md-1'> 
                    <i class="fa-regular fa-clock"></i>
                </div>
                <div className='col-md-6'>
                    <p>watchLater</p>
                </div>
           </div>
           <div className='row hdiv '>
                <div className='col-md-1'> 
                   <i class="fa-brands fa-youtube"></i>
                </div>
                <div className='col-md-6'>
                    <p>Your Vedios</p>
                </div>
           </div>
           <hr></hr>
           <div className='row '>
                <p className='subscriptions'>Suscriptions</p>
           </div>
           <div className='row hdiv '>
                <div className='col-md-2'> 
                    <img src={imageUrl} alt="Description of the image" width="30px" class="border-round" />
                </div>
                <div className='col-md-6'>
                    <p>FreeCodeCamp</p>
                </div>
           </div>
           <div className='row hdiv '>
                <div className='col-md-2'> 
                    <img src={imageUrl} alt="Description of the image" width="30px" class="border-round" />
                </div>
                <div className='col-md-6'>
                    <p>FreeCodeCamp</p>
                </div>
           </div>
           <div className='row hdiv '>
                <div className='col-md-2'> 
                    <img src={imageUrl} alt="Description of the image" width="30px" class="border-round" />
                </div>
                <div className='col-md-6'>
                    <p>FreeCodeCamp</p>
                </div>
           </div>
           <div className='row hdiv '>
                <div className='col-md-2'> 
                    <img src={imageUrl} alt="Description of the image" width="30px" class="border-round" />
                </div>
                <div className='col-md-6'>
                    <p>FreeCodeCamp</p>
                </div>
           </div>
           <div className='row hdiv '>
                <div className='col-md-2'> 
                    <img src={imageUrl} alt="Description of the image" width="30px" class="border-round" />
                </div>
                <div className='col-md-6'>
                    <p>FreeCodeCamp</p>
                </div>
           </div>
        </div>
    </div>
    </>
  )
}
export default Sidebar;
