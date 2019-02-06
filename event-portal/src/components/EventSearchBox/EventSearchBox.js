import React from 'react';
import SearchButton from '../Buttons/Search/Search';
import './EventSearchBox.css';

class EventSearchBox extends React.Component{
    render(){
        return (
            <div className="EventSearchBox">
                <div className="SearchControls">
                    <div className="EventSearchHeader">
                        FIND AN EVENT
                    </div>
                    <div className="EventSearchIntro">
                        Enter your city, post code, or name of event.
                    </div>
                    <div className="EventSearchInputBox">
                        <div class="inputWithIcon">
                            <input type="text" placeholder="Search here..." />
                            <i class="fa fa-search fa-lg fa-fw" aria-hidden="true"></i>
                        </div>                        
                    </div>
                    <div className="SearchButton">
                        <SearchButton />
                    </div>
                </div>
            </div>
        )
    }
}

export default EventSearchBox;