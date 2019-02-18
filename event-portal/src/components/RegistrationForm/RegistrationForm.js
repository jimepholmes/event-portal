import React, {useState} from 'react';
import './RegistrationForm.css';
import TextEntryBox from '../TextEntryBox/TextEntryBox';
import Checkbox from '../CheckBox/CheckBox';
import GenericButton from '../Buttons/Generic/Generic';

const RegistrationForm = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [privacyOptIn, setPrivacyOptIn] = useState(false);
    const [eventOptIn, setEventOptIn] = useState(false);
    const [buttonEnabled, setButtonEnabled] = useState(false);

    function setObjectFirstName(event){
        setFirstName(event.target.value);
        console.log(`first name:${event.target.value}`);
    }

    function setObjectLastName(event){
        setLastName(event.target.value);
        console.log(`last name:${event.target.value}`);
    }

    function setObjectEmailAddress(event){
        setEmailAddress(event.target.value);
        console.log(`Email Address:${event.target.value}`);
    }

    function setObjectPassword(event){
        setPassword(event.target.value);
        console.log(`password:${event.target.value}`);
    }

    function setPrivacy(event){
        console.log(`checked:${event.target.checked}`);
        console.log(`privacy optin b4:${privacyOptIn}`);
        //setPrivacyOptIn(event.target.checked);
        //enableButton();

        setPrivacyOptIn(event.target.checked, function () {
            //console.log(this.state.boardAddModalShow);
            console.log(`privacy optin after: ${privacyOptIn}`);
        });        
    }

    function setEventOptin(event){
        console.log(`event checked:${event.target.checked}`);
        setEventOptIn(event.target.checked);
    }

    function enableButton(){
        console.log(`privacy optin:${privacyOptIn}`);
        if (privacyOptIn ){
            setButtonEnabled(true);
        }else{
            setButtonEnabled(false);
        }
    }

    const styles = {
        SignUp: {
            marginTop: '40px',
        }
    } 

    return (
      <div>
        <TextEntryBox onChange={setObjectFirstName} type="text" placeHolderText="First Name"/>
        <TextEntryBox onChange={setObjectLastName} type="text" placeHolderText="Last Name"/>
        <TextEntryBox onChange={setObjectEmailAddress} type="text" placeHolderText="Email Address"/>
        <TextEntryBox onChange={setObjectPassword} type="password" placeHolderText="Password"/>
        <Checkbox id="chkPrivacy" onChange={setPrivacy} label="By signing up you agree to our <a href='/privacy'>Privacy Policy</a> and <a href='/eula'>EULA</a>" />
        <Checkbox id="chkUpdates" onChange={setEventOptin} label="Keep me updated about Niantic products, news, events and promotions" />
        <GenericButton enabled={buttonEnabled} containerStyle={styles.SignUp} caption="SIGN UP" />
      </div>
    )
}

export default RegistrationForm;
