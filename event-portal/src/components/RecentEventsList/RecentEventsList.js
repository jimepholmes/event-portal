import React from 'react';
import './RecentEventsList.css';
import RecentEventsListItem from '../RecentEventsListItem/RecentEventsListItem';

class RecentEventsList extends React.Component{
    render(){
        return (
            <div>
                <div className="SectionTitle">
                    {this.props.titleText}
                </div>
                <div className="RecentEventsList">
                    {
                        this.props.events.map(event => {
                            return <RecentEventsListItem key={event.id} event={event}/>
                        })
                    }
                </div>
                { this.props.showAllLink 
                 ? <div className="RecentEventsListMoreLink">
                    <a href="/EventSearch">See All ▶</a>
                </div>
                : <div></div>
                }
            </div>
        );
    }
}

export default RecentEventsList;
