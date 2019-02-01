import React from 'react';
import './TitleBar.css';
import Logo from '../Logo/Logo'

class TitleBar extends React.Component{
    constructor (props){
        super (props);

    }

    render(){
        return (
            <div className="TitleBar">
                <Logo />
            </div>
        )
    }
}

export default TitleBar;