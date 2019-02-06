import React from 'react';
import './FindEvent.css';

class FindEventButton extends React.Component{
    render(){
        return (
            <div className="SubmitButton">
                <a href="/EventSearch" style={this.props.style}>FIND AN EVENT</a>
            </div>
        )
    }
}

export default FindEventButton;