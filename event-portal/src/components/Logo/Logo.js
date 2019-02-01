import React from 'react';
import './Logo.css';

class Logo extends React.Component{
    render(){
        return (
            <div className="Logo">
                <img src="/Logo/niantic-logo-white.png" alt="Niantic Earth Day"/>
            </div>
        )    
    }
}

export default Logo