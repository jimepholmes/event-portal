import React from 'react';
import './Map.css';

class Map extends React.Component{
    render (){
        const mapCentre = `https://maps.google.com/maps?q=${this.props.mapCentre}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

        return (
            <div className="Map">
                <iframe width="100%" height="400" id="gmap_canvas" src={mapCentre} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
        )
    }
}

export default Map;