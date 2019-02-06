import React from 'react';
import './Map.css';

class Map extends React.Component{
    render (){
        return (
            <div className="Map">
                <iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=vauxhall%2C%20london&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
        )
    }
}

export default Map;