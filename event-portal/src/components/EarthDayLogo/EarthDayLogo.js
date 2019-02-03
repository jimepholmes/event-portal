import React from 'react';
import './EarthDayLogo.css';

class EarthDayLogo extends React.Component{
    render(){
        return (
            <div className="EarthDayLogo">
                <img src={require('./earth-day.png')} alt="Niantic Earth Day" className="EarthDayLogoImage"/>
            </div>
        )
    }
}

export default EarthDayLogo;