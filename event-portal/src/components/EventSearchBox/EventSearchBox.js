import React from 'react';
import SearchButton from '../Buttons/Search/Search';
import './EventSearchBox.css';

class EventSearchBox extends React.Component{
    render(){
        return (
            <div className="EventSearchBox">
                <div className="SearchControls">
                    <div className="TitleText">FIND AN EVENT</div>
                    <SearchButton />
                </div>
            </div>
        )
    }
}

export default EventSearchBox;