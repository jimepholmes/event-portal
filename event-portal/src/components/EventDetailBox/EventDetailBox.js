import React from 'react';
import SearchButton from '../Buttons/Search/Search';
import './EventDetailBox.css';

const EventDetailBox = (props) => {
    console.log(props)
    return (
        <div className="EventSearchBox">
            <div className="DetailControls">
                <div className="EventDetailHeader">
                    {props.eventDetail.name}
                </div>
                <div className="EventDetailIntro">
                    Enter your location.
                    <img src="images/icons/location.png" />
                </div>
                <div className="EventDetailInputBox">
                    Something else here
                </div>
                <div className="DetailButton">
                    <SearchButton />
                </div>
            </div>
        </div>
    )
}

export default EventDetailBox;