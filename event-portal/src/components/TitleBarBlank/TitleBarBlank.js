import React from 'react';
import PropTypes from 'prop-types';
import './TitleBarBlank.css';
import Logo from '../Logo/Logo';

const TitleBarBlank = (props) =>{
    return (
        <div className="TitleBarBlank">
            <Logo useBlack={props.useBlack}/>
        </div>
    )
}


export default TitleBarBlank;