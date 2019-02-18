import React, {useState, useEffect} from 'react';
import './LoginForm.css';
import TextEntryBox from '../TextEntryBox/TextEntryBox';
import GenericButton from '../Buttons/Generic/Generic';
import API from '../../util/API';
import Utils from '../../util/utils';

const LoginForm = props => {
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [buttonEnabled, setButtonEnabled] = useState(false);
    const [emailOK, setEmailOK] = useState(false);
    const [emailStyle, setEmailStyle] = useState("EmailOK");

    function setObjectEmailAddress(event){
        //setting the email style doesn't seem to be working right now.  might need to change this to a class component, not a function component
        if (Utils.validateEmail(event.target.value)){
            setEmailStyle("EmailOK")
        }else{
            setEmailStyle("EmailNotOK")
        }
        setEmailAddress(event.target.value);
    }

    function setObjectPassword(event){
        setPassword(event.target.value);
    }

    function validateForm(){
        if (password.length > 0){
            if (Utils.validateEmail(emailAddress)){
                setButtonEnabled(true);
            }else{
                setButtonEnabled(false);
            }
        }else{
            setButtonEnabled(false);
        }
    }

    function handleLogin(){
        /*
        API.newUser(firstName, lastName, emailAddress, password, 1).then(newUserInfo => {
            //alert(theBusinesses);
            console.log("new user info:");
            console.log(newUserInfo);
            if (newUserInfo.response == "error"){
                console.log(newUserInfo.message)
            }else{
                //successful user, so do something else here...move them to login?

            }
          }) 
          */ 
         console.log("handle login");      
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
        <TextEntryBox onChange={setObjectEmailAddress} type="text" placeHolderText="Email Address" className={emailStyle} />
        <TextEntryBox onChange={setObjectPassword} type="password" placeHolderText="Password"/>
        <GenericButton enabled={buttonEnabled} containerStyle={styles.Login} caption="SIGN IN" onChange={handleLogin}/>
      </div>
    )
}

export default LoginForm;
