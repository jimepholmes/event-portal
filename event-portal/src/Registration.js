import React, {useState, useEffect} from 'react';
import './Registration.css';
import TitleBarBlank from './components/TitleBarBlank/TitleBarBlank';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const Registration = props => {

    return (
      <div className="App">
        <TitleBarBlank useBlack="true"/>
        <div className="Registration">
          <div className="RegistrationContainer">
            <div className="RegTitleText">WELCOME TO EARTH DAY 2019</div>
            <RegistrationForm />
            <div className="pageLinks">
              <a href="contact">Contact Information</a><br/>
              <a href="faq">FAQ</a><br/>
            </div>
          </div> 
          <div className="RegFooter">
            <Footer />
          </div>       
        </div>
      </div>
    )
}

export default Registration;
