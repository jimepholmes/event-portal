import React from 'react';
import './FindEvent.css';

class FindEvent extends React.Component{
    render(){
        return (
            <div className="SubmitButton">
                <a href="/EventSearch" style={this.props.style}>FIND AN EVENT</a>
            </div>
        )
    }
}

export default FindEvent;