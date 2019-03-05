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
                <div className="EventDetailDateLocation">
                    <div>
                        <img src="images/icons/datetime.png" className="DetailIcon"/>
                    </div>
                    <div>
                        {props.eventDetail.startDate}
                    </div>
                    <div className="AddressIcon">
                        <img src="images/icons/location.png" className="DetailIcon"/>
                    </div>
                    <div className="Address">
                        {props.eventDetail.address1}, {props.eventDetail.state}, {props.eventDetail.countryCode}
                    </div>
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