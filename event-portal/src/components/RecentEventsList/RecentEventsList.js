import React from 'react';
import './RecentEventsList.css';
import RecentEventsListItem from '../RecentEventsListItem/RecentEventsListItem';

class RecentEventsList extends React.Component{
    render(){
        return (
            <div>
                <div className="RecentEventsList">
                    <div className="RecentEventsListHeader">
                        RECENTLY ADDED EVENTS
                    </div>
                    {
                        this.props.events.map(event => {
                            return <RecentEventsListItem key={event.id} event={event}/>
                        })
                    }
                </div>
                <div className="RecentEventsListMoreLink">
                    <a href="/EventSearch">See All ▶</a>
                </div>
            </div>
        );
    }
}

export default RecentEventsList;
