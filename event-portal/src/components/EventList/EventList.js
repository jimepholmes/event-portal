import React from 'react';
import './EventList.css';
import EventListItem from '../EventListItem/EventListItem';

class EventList extends React.Component{
    render(){
        return (
            <div className="EventList">
                <div className="EventListHeader">
                    FEATURED EVENTS
                </div>
                {
                    this.props.events.map(event => {
                        return <EventListItem key={event.id} event={event}/>
                    })
                }
                <div className="EventListMoreLink">
                    <a href="">See All ▶</a>
                </div>
            </div>            
        );
    }
}

export default EventList;
