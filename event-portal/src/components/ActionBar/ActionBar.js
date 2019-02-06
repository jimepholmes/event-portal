import React from 'react';
import SubmitEventButton from '../Buttons/SubmitEvent/SubmitEvent'
import SignUpButton from '../Buttons/SignUp/SignUp';
import './ActionBar.css';


class ActionBar extends React.Component{
    render(){
        return (
            <div className="ActionBar">
                <div className="ActionBarText">Sign up to get involved in these great local events, or suggest one of your own</div>
                <div className="ActionBarButtons">
                    <SignUpButton style={{backgroundColor: '#fff'}}/>
                    <SubmitEventButton style={{backgroundColor: '#f2ffbc'}}/>
                </div>
            </div>
        )
    }
}

export default ActionBar;