import React, {useState} from 'react';
import './Generic.css';

const GenericButton = (props) => {
    const [enabled, setEnabled] = useState(props.enabled);

    if (props.enabled){
        return (
            <div className="GenericButton" style={props.containerStyle}>
                <a onClick={props.onChange} style={props.style}>{props.caption}</a>
            </div>
        )    
    }else{
        return (
            <div className="GenericButton" style={props.containerStyle}>
                <span style={props.style}>{props.caption}</span>
            </div>
        )    
    }
}

export default GenericButton;