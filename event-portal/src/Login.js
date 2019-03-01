import React, {useState, useEffect} from 'react';
import './Login.css';
import TitleBarBlank from './components/TitleBarBlank/TitleBarBlank';
import LoginForm from './components/LoginForm/LoginForm';
import Footer from './components/Footer/Footer';

const Login = props => {

    return (
      <div className="App">
        <TitleBarBlank useBlack="true"/>
        <div className="Login">
          <div className="LoginContainer">
            <div className="LoginTitleText">WELCOME TO EARTH DAY 2019</div>
            <LoginForm />
            <div className="pageLinks">
              <a href="contact">Contact Information</a><br/>
              <a href="faq">FAQ</a><br/>
            </div>
          </div>        
          <div className="LoginFooter">
            <Footer />
          </div>       
        </div>
      </div>
    )
}

export default Login;
