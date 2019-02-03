import React from 'react';
import './EventListItem.css';

class EventListItem extends React.Component{
    render(){
        return (
            <div className="Event">
            <div className="image-container">
                <img src={this.props.event.imageSrc} alt={this.props.event.name}/>
            </div>
            <h2>{this.props.event.name}</h2>
            <div className="Event-information">
                <div className="Event-address">
                <p>{this.props.event.name}</p>
                <p>{this.props.event.name}</p>
                <p>{this.props.event.location} {this.props.event.countryCode}</p>
                </div>
                <div className="Event-reviews">
                <h3>{this.props.event.name}</h3>
                <h3 className="rating">{this.props.event.name} stars</h3>
                <p>{this.props.event.name} reviews</p>
                </div>
            </div>
            </div>
        );
    }
}

export default EventListItem;