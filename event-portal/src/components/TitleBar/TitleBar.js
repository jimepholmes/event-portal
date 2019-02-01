import React from 'react';
import './TitleBar.css';
import Logo from '../Logo/Logo';
import Hamburger from '../Hamburger/Hamburger';

class TitleBar extends React.Component{
    constructor (props){
        super (props);

    }

    render(){
        return (
            <div className="TitleBar">
                <Logo />
                <Hamburger />
            </div>
        )
    }
}

export default TitleBar;