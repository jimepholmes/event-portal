import React from 'react';
import SubmitEvent from '../Buttons/SubmitEvent/SubmitEvent'
import SignUp from '../Buttons/SignUp/SignUp';
import './ActionBar.css';


class ActionBar extends React.Component{
    render(){
        return (
            <div className="ActionBar">
                <div className="ActionBarText">Sign up to get involved in these great local events, or suggest one of your own</div>
                <div className="ActionBarButtons">
                    <SignUp style={{backgroundColor: '#fff'}}/>
                    <SubmitEvent style={{backgroundColor: '#f2ffbc'}}/>
                </div>
            </div>
        )
    }
}

export default ActionBar;