import React, {useState, useEffect} from 'react';
import SearchButton from '../Buttons/Search/Search';
import './TextEntryBox.css';

const TextEntryBox = props => {

    return (
        <div className="TextEntryBox">
            <input onChange={props.onChange} type={props.type} placeholder={props.placeHolderText} />
        </div>    
    )
}


export default TextEntryBox;