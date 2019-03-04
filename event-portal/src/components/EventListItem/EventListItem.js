import React from 'react';
import './EventListItem.css';
import Utils from '../../util/utils';

class EventListItem extends React.Component{
    render(){
        const styles = {
            container: {
                borderRadius: '15px',
                overflow: 'hidden'
            },
            image: {
                backgroundImage: `url(${this.props.event.imagePath})`,
                backgroundPosition: 'center' 
            }
        }        
        //                backgroundImage: `url(${require(`./${this.props.event.imagePath}`)})`,

        let Day = Utils.getDatePart(this.props.event.startDate, "dd");
        let Month = Utils.getDatePart(this.props.event.startDate, "mm");
        return (
            <div className="Event" style={styles.container}>
                <div className="image-container" style={styles.image}></div>
                <div className="Event-information">
                    <div className="Event-date">
                        <span className="Event-day">{Day}</span>
                        <span className="Event-month">{Month}</span>
                    </div>
                    <div className="Event-detail">
                        <h3>{this.props.event.name}</h3>
                        <h4>{this.props.event.location}, {this.props.event.countryCode}</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventListItem;