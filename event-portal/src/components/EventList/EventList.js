import React from 'react';
import './EventList.css';
import EventListItem from '../EventListItem/EventListItem';

class EventList extends React.Component{
    render(){
        return (
            <div className="EventList">
                {
                    this.props.events.map(event => {
                        return <EventListItem key={event.id} event={event}/>
                    })
                }
            </div>            
        );
    }
}

export default EventList;
