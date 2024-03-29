import React from 'react';
import './Logo.css';

const Logo = props =>{
    if (props.useBlack=="true"){
        return (<div className="Logo"><img src='images/logos/niantic-logo-black.png' alt="Niantic Earth Day" className="LogoImage"/></div>)    
    }else{
        return (<div className="Logo"><img src='images/logos/niantic-logo-white.png' alt="Niantic Earth Day" className="LogoImage"/></div>)    
    }
}

export default Logo