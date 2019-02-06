import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './HomePage';
import EventSearch from './EventSearch';
import MenuItem from './components/Menu/MenuItem/MenuItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,  //set to true to skip login check for now
      messageCount: 0,
      menu: ['About Us','Our Products','Services','FAQ','Contact Us'],
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
    this.handleLinkClick = this.handleLinkClick.bind(this);

    setInterval(()=>this.updateMessageCount(), 10000);   //this line also binds 'this' to the function
}

  componentDidMount() {
    this.checkForLoginCookie();
    this.buildMenu();
  };

  checkForLoginCookie = () => {
    /*
    const userService = UserService.getInstance();
    if (userService.getSessionGuid()) {
      this.props.postCheckUserLogin({loginSessionGuid: userService.getSessionGuid()}).then(this.userChecked)
    } else {
      this.props.userLoginSessionChecked();
      this.userChecked();
    }
    */
  };

  buildMenu = () => {
    const menuItems = this.state.menu.map((val,index)=>{
      return (
        <MenuItem 
          key={index} 
          delay={`${index * 0.1}s`}
          onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>)
    });  

    this.setState({
      menuItems: menuItems
    });
  }
  userChecked = () => {
    this.setState({checked: true});
  };

  handleMenuClick() {
    this.setState(
      {
        menuOpen:!this.state.menuOpen
      });
  }

  handleLinkClick() {
    this.setState({menuOpen: false});
  }

  updateMessageCount(){
    this.setState(
      {
        messageCount: Math.floor((Math.random() * 10) + 1)
      })
  }


  render() {
    if (this.state.checked) {
      return (
        <Router>
          <Switch>
            <Route exact path="/" render={props => (
              <HomePage menu={this.state.menu} menuItems={this.state.menuItems} handleMenuClick={this.handleMenuClick} handleLinkClick={this.handleLinkClick} menuOpen={this.state.menuOpen} messageCount={this.state.messageCount} containerStyle={this.state.containerStyle}/>
            )}/>
            <Route exact path="/EventSearch" render={props => (
              <EventSearch menu={this.state.menu} menuItems={this.state.menuItems} handleMenuClick={this.handleMenuClick} handleLinkClick={this.handleLinkClick} menuOpen={this.state.menuOpen} messageCount={this.state.messageCount} containerStyle={this.state.containerStyle}/>
            )}/>
            <Route exact path="/home" render={props => (
              <HomePage menu={this.state.menu} menuItems={this.state.menuItems} handleMenuClick={this.handleMenuClick} handleLinkClick={this.handleLinkClick} menuOpen={this.state.menuOpen} messageCount={this.state.messageCount} containerStyle={this.state.containerStyle}/>
            )}/>
          </Switch>
        </Router>
      );
    }
    //return <Loader size='large'>Loading</Loader>;
  }
}

export default App;
