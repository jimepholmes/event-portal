import React from 'react';
import PropTypes from 'prop-types';
import './TitleBar.css';
import Logo from '../Logo/Logo';
import MessageIcon from '../TitleBar/MessageIcon/MessageIcon'

class TitleBar extends React.Component{
    render(){
        return (
            <div className="TitleBar">
                <Logo />
                <MessageIcon messageCount={this.props.messageCount}/>
            </div>
        )
    }
}

TitleBar.propTypes = {
    messageCount: PropTypes.number.isRequired
};


export default TitleBar;