import React from 'react';
import './SignUp.css';

class SignUp extends React.Component{
    constructor (props){
        super(props);
    }
    render(){
        return (
            <div className="SignUpButton">
                <a href="/SignUp" style={this.props.style}>SIGN UP TO PARTICIPATE</a>
            </div>
        )
    }
}

export default SignUp;