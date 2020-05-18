import React from 'react';
import 'tachyons';
import Tilt from 'react-tilt';
import brain from './icons8-brain-100.png';
import './Logo.css';
const Logo = () => {
    return(
   <div className='ma4 mt0'>
       
       <Tilt className="Tilt shadow-2 br2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
 <div className="Tilt-inner"> <img style={{ paddingTop:'5px'}} alt='logo' src={brain}></img> </div>
 <h3 className='L'>AMO brain</h3>
</Tilt>
   </div>
    );
}
export default Logo;