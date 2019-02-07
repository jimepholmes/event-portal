import React from 'react';
import './RecentEventsListItem.css';
import Utils from '../../util/utils';

class RecentEventListItem extends React.Component{
    render(){
        const styles = {
            container: {
                borderRadius: '15px',
                overflow: 'hidden'
            },
            image: {
                backgroundImage: `url(${require(`./${this.props.event.imagePath}`)})`,
                backgroundPosition: 'center' 
            }
        }        
        let Day = Utils.getDatePart(this.props.event.startDate, "dd");
        let Month = Utils.getDatePart(this.props.event.startDate, "mm");
        return (
            <div className="RecentEvent" style={styles.container}>
                <div className="image-container" style={styles.image}></div>
                <div className="RecentEvent-information">                    
                    <div className="RecentEvent-name">
                        <h3>{this.props.event.name}</h3>
                    </div>
                    <div className="RecentEvent-info">
                        {Day} {Month}<br/>
                        {this.props.event.location}, {this.props.event.countryCode}
                    </div>
                </div>
            </div>
        );
    }
}

export default RecentEventListItem;