import React from 'react';
import './Header.css';
import EarthDayLogo from '../EarthDayLogo/EarthDayLogo';

class Header extends React.Component{
    render(){
        return (
            <div className="Header">
                <div className="HeaderText">EARTH DAY 2019</div>
                <div className="IntroText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis commodo purus, eu lacinia lacus pretium ut. Maecenas et venenatis mi. Nunc feugiat id justo non mattis. Donec tristique enim eu arcu lacinia, et eleifend tellus euismod. Nulla scelerisque, mauris egestas feugiat blandit, odio odio elementum orci, eget porttitor nisl risus non tortor.</div>
                <EarthDayLogo />
            </div>
        )
    }
}

export default Header;