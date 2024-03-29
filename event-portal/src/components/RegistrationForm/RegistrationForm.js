import React, {useState, useEffect} from 'react';
import './RegistrationForm.css';
import TextEntryBox from '../TextEntryBox/TextEntryBox';
import Checkbox from '../CheckBox/CheckBox';
import GenericButton from '../Buttons/Generic/Generic';
import API from '../../util/API';
import Utils from '../../util/utils';

const RegistrationForm = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [privacyOptIn, setPrivacyOptIn] = useState(false);
    const [eventOptIn, setEventOptIn] = useState(false);
    const [buttonEnabled, setButtonEnabled] = useState(false);
    const [emailOK, setEmailOK] = useState(false);
    const [emailStyle, setEmailStyle] = useState("EmailOK");

    function setObjectFirstName(event){
        setFirstName(event.target.value);
    }

    function setObjectLastName(event){
        setLastName(event.target.value);
    }

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

    function setPrivacy(event){
        setPrivacyOptIn(event.target.checked);
    }

    function setEventOptin(event){
        setEventOptIn(event.target.checked);
    }

    function validateForm(){
        if (privacyOptIn && firstName.length>0 && lastName.length > 0 && password.length > 0){
            if (Utils.validateEmail(emailAddress)){
                setButtonEnabled(true);
            }else{
                setButtonEnabled(false);
            }
        }else{
            setButtonEnabled(false);
        }
    }

    function handleRegistration(){
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
    }

    useEffect(() => {
        validateForm();
    });    

    const styles = {
        SignUp: {
            marginTop: '40px',
        }
    } 

    return (
      <div>
        <TextEntryBox onChange={setObjectFirstName} type="text" placeHolderText="First Name"/>
        <TextEntryBox onChange={setObjectLastName} type="text" placeHolderText="Last Name"/>
        <TextEntryBox onChange={setObjectEmailAddress} type="text" placeHolderText="Email Address" className={emailStyle} />
        <TextEntryBox onChange={setObjectPassword} type="password" placeHolderText="Password"/>
        <Checkbox id="chkPrivacy" onChange={setPrivacy} label="By signing up you agree to our <a href='/privacy'>Privacy Policy</a> and <a href='/eula'>EULA</a>" />
        <Checkbox id="chkUpdates" onChange={setEventOptin} label="Keep me updated about Niantic products, news, events and promotions" />
        <GenericButton enabled={buttonEnabled} containerStyle={styles.SignUp} caption="SIGN UP" onChange={handleRegistration}/>
      </div>
    )
}

export default RegistrationForm;
