import React from 'react';
import './MessageIcon.css'

class MessageIcon extends React.Component{
    render(){
        return(
            <div className="Container">
                <div>
                    <img className="MessageIconImage" src={require('./message.png')} alt='You have {this.props.messageCount} Messages'/>
                </div>
                <div className="MessageCount">{this.props.messageCount}</div>
            </div>
        )
    }
}


export default MessageIcon;