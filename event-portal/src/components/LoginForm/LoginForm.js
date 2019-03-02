import React, { useState, useEffect } from 'react';
import './LoginForm.css';
import TextEntryBox from '../TextEntryBox/TextEntryBox';
import GenericButton from '../Buttons/Generic/Generic';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';
import API from '../../util/API';
import Utils from '../../util/utils';

const LoginForm = props => {
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [buttonEnabled, setButtonEnabled] = useState(false);
    const [emailOK, setEmailOK] = useState(false);
    const [emailStyle, setEmailStyle] = useState("EmailOK");
    const [message, setMessage] = useState(" ");
    const [errorStyle, setErrorStyle] = useState("hidden");

    function setObjectEmailAddress(event) {
        //setting the email style doesn't seem to be working right now.  might need to change this to a class component, not a function component
        if (Utils.validateEmail(event.target.value)) {
            setEmailStyle("EmailOK")
        } else {
            setEmailStyle("EmailNotOK")
        }
        setEmailAddress(event.target.value);
    }

    function setObjectPassword(event) {
        setPassword(event.target.value);
    }

    function validateForm() {
        if (password.length > 0) {
            if (Utils.validateEmail(emailAddress)) {
                setButtonEnabled(true);
            } else {
                setButtonEnabled(false);
            }
        } else {
            setButtonEnabled(false);
        }
    }

    function handleLogin() {
        API.login(emailAddress, password).then(userInfo => {
            //alert(theBusinesses);
            console.log("login user info:");
            console.log(userInfo);
            if (userInfo.response == "error") {
                //unsuccessful login, so show them an error
                showError(userInfo.message);
                console.log(userInfo.message)
            } else {
                //successful login, so drop the cookie and push them to their home page (depending on user type?)
                Utils.setCookie("pmev_session_guid", userInfo.message, 10);
                window.location = "/"
            }
        })
    }

    function showError(theMessage){
        setMessage(theMessage);
        setErrorStyle("show");
        setTimeout(function(){
            hideError()
        }, 3000);
    }

    function hideError(){
        console.log("hiding!");
        setErrorStyle("hidden");        
    }

    useEffect(() => {
        validateForm();
    });

    const styles = {
        Login: {
            marginTop: '40px',
        }
    }

    return (
        <div>
            <ErrorDisplay message={message} style={errorStyle} />
            <TextEntryBox onChange={setObjectEmailAddress} type="text" placeHolderText="Email Address" className={emailStyle} />
            <TextEntryBox onChange={setObjectPassword} type="password" placeHolderText="Password" />
            <GenericButton enabled={buttonEnabled} containerStyle={styles.Login} caption="SIGN IN" onChange={handleLogin} />
        </div>
    )
}

export default LoginForm;
