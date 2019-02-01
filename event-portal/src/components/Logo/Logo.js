import React from 'react';
import './Logo.css';

class Logo extends React.Component{
    render(){
        return (
            <div className="Logo">
                <img src={require('./niantic-logo-white.png')} alt="Niantic Earth Day" className="LogoImage"/>
            </div>
        )    
    }
}

export default Logo