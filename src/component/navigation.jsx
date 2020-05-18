import React from 'react';
import 'tachyons';

const Navition = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn){
            return(
    <nav style={{display:'flex', justifyContent : 'flex-end',  padding : '5px'}}>
        <p  onClick = {() => onRouteChange('signout')} className= 'f3 link black undreline pa3 pointer tr br-bill ba pa9  shadow-3 mw6 '>Sign out</p>
       
    </nav>);
    }else{
        return(
            <nav style={{display:'flex', justifyContent : 'flex-end',  padding : '5px'}}>
                <p  onClick = {() => onRouteChange('signin')} className= 'f3 link black undreline pa3 pointer tr br-bill ba pa9  shadow-3 mw6 '>Sign in</p>
                <p  onClick = {() => onRouteChange('regestir')} className= 'f3 link black undreline pa3 pointer tr br-bill ba pa9  shadow-3 mw6 pa1'>Regester</p>
            </nav>);
    }

    
}
export default Navition;