import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';
import HomePage from './HomePage';
import NGOHome from './NGOHome';
import EventSearch from './EventSearch';
import MenuItem from './components/Menu/MenuItem/MenuItem';
import Utils from './util/utils';
import API from './util/API';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      messageCount: 0,
      menu: ['About Us','Our Products','Services','FAQ','Contact Us', 'Log In', 'Register'],
      menuOpen: false,
      containerStyle:{
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: '99',
        opacity: 0.9,
        display:'flex',
        alignItems:'center',
        background: 'black',
        width: 40,
        color: 'white',
        fontFamily:'Lobster',
      }
    }

    this.handleMenuClick = this.handleMenuClick.bind(this);
    //this.handleLinkClick = this.handleLinkClick.bind(this);

    setInterval(()=>this.updateMessageCount(), 10000);   //this line also binds 'this' to the function
}

  componentDidMount() {
    this.checkLogin();
  };

  checkLogin = () => {
    let sessionCookie = Utils.getCookie("pmev_session_guid");
    console.log(`sessionCookie: ${sessionCookie}`)
    if (sessionCookie.length>0){
      //there is a cookie, so check that its valid
      API.checkSession(sessionCookie).then(sessionInfo => {
        if (sessionInfo.response == "success") {
          this.setState({
            loggedIn: true,
            //add a logout button to the menu          
            menu: ['About Us','Our Products','Services','FAQ','Contact Us', 'Log Out']
          })
          this.buildMenu();
        } else {
          this.setState({
            loggedIn: false
          })
          //as hygiene, clear the log in cookie
          Utils.clearCookie("pmev_session_guid");
          this.buildMenu();
        }
      })
    }else{
      this.buildMenu();
    }
  };

  buildMenu = () => {
    const menuItems = this.state.menu.map((val,index)=>{
      return (
        <MenuItem 
          key={index} 
          delay={`${index * 0.1}s`}
          onClick={()=>{this.handleLinkClick(val);}}>{val}</MenuItem>)
    });  

    this.setState({
      menuItems: menuItems
    });
  }

  handleMenuClick() {
    this.setState(
      {
        menuOpen:!this.state.menuOpen
      });
  }

  handleLinkClick(menuClicked) {
    console.log(`menu clicked: ${menuClicked}`)
    switch (menuClicked){
      case "Log In":
        window.location="/login"
        break;
      case "Register":
        window.location="/registration"
        break;
      case "Log Out":
        Utils.clearCookie("pmev_session_guid");
        window.location="/"
        break;
      default:

    }
    //window.location="/registration";
    //this.setState({menuOpen: false});
  }

  updateMessageCount(){
    this.setState(
      {
        messageCount: Math.floor((Math.random() * 10) + 1)
      })
  }


  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={props => (
            <HomePage loggedIn={this.state.loggedIn} menu={this.state.menu} menuItems={this.state.menuItems} handleMenuClick={this.handleMenuClick} menuOpen={this.state.menuOpen} messageCount={this.state.messageCount} containerStyle={this.state.containerStyle}/>
          )}/>
          <Route exact path="/Registration" render={props => (
            <Registration menu={this.state.menu} menuItems={this.state.menuItems} handleMenuClick={this.handleMenuClick} menuOpen={this.state.menuOpen} messageCount={this.state.messageCount} containerStyle={this.state.containerStyle}/>
          )}/>
          <Route exact path="/Login" render={props => (
            <Login menu={this.state.menu} menuItems={this.state.menuItems} handleMenuClick={this.handleMenuClick} menuOpen={this.state.menuOpen} messageCount={this.state.messageCount} containerStyle={this.state.containerStyle}/>
          )}/>
          <Route exact path="/EventSearch" render={props => (
            <EventSearch loggedIn={this.state.loggedIn} menu={this.state.menu} menuItems={this.state.menuItems} handleMenuClick={this.handleMenuClick} menuOpen={this.state.menuOpen} messageCount={this.state.messageCount} containerStyle={this.state.containerStyle}/>
          )}/>
          <Route exact path="/home" render={props => (
            <HomePage loggedIn={this.state.loggedIn} menu={this.state.menu} menuItems={this.state.menuItems} handleMenuClick={this.handleMenuClick} menuOpen={this.state.menuOpen} messageCount={this.state.messageCount} containerStyle={this.state.containerStyle}/>
          )}/>
          <Route exact path="/ngo" render={props => (
            <NGOHome loggedIn={this.state.loggedIn} menu={this.state.menu} menuItems={this.state.menuItems} handleMenuClick={this.handleMenuClick} menuOpen={this.state.menuOpen} messageCount={this.state.messageCount} containerStyle={this.state.containerStyle}/>
          )}/>
        </Switch>
      </Router>
    );
  }
  //return <Loader size='large'>Loading</Loader>;
}

export default App;
