import React from 'react';
import PropTypes from 'prop-types';
import './TitleBar.css';
import Logo from '../Logo/Logo';
import MessageIcon from '../TitleBar/MessageIcon/MessageIcon'

const TitleBar = (props) => {
    if (props.loggedIn){
        return (
            <div className="TitleBar">
                <Logo />
                <MessageIcon messageCount={props.messageCount}/>
            </div>
        )    
    }else{
        return (
            <div className="TitleBar">
                <Logo />
            </div>
        )    
    }
}

TitleBar.propTypes = {
    loggedIn: PropTypes.number.isRequired,
    messageCount: PropTypes.number.isRequired
};
TitleBar.defaultProps = {
    loggedIn: false,
    messageCount: "0"
};


export default TitleBar;