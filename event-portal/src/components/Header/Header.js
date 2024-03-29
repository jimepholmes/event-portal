import React from 'react';
import './Header.css';
import EarthDayLogo from '../EarthDayLogo/EarthDayLogo';

const Header = props => {
    return (
        <div className="Header">
            <div className="HeaderContainer">
                <div className="HeaderText">{props.headerText}</div>
                <div className="IntroText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis commodo purus, eu lacinia lacus pretium ut. Maecenas et venenatis mi. Nunc feugiat id justo non mattis. Donec tristique enim eu arcu lacinia, et eleifend tellus euismod.</div>
                <div className="EarthDayLogo">
                    <EarthDayLogo />
                </div>
            </div>
        </div>
    )
}

export default Header;