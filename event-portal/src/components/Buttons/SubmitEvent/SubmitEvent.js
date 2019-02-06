import React from 'react';
import './SubmitEvent.css';

class SubmitEventButton extends React.Component{
    render(){
        return (
            <div className="SubmitEventButton">
                <a href="/SuggestEvent" style={this.props.style}>SUGGEST AN EVENT</a>
            </div>
        )
    }

}

export default SubmitEventButton;