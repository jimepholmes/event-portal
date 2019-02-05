import React, { Component } from 'react';
import TitleBar from './components/TitleBar/TitleBar';
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem/MenuItem';
import MenuButton from './components/Menu/MenuButton/MenuButton';
import Header from './components/Header/Header';
import EventList from './components/EventList/EventList';
import FindEvent from './components/Buttons/FindEvent/FindEvent';
import SubmitEvent from './components/Buttons/SubmitEvent/SubmitEvent';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      menuOpen:false,
      messageCount: 0,
      events: []  //this is used to load in the default events
    }
    setInterval(()=>this.updateMessageCount(), 10000);   //this line also binds 'this' to the function
  }

  componentDidMount(){
    this.getHomePageEvents();
  }
  
  getHomePageEvents(){
    //Yelp.search(term, location, sortBy).then(theBusinesses => {
      //alert(theBusinesses);
      //console.log(theBusinesses);
      let testEvents = [
        {
          id:1,
          name: "Jims first test event",
          startDate: "2019-04-21 00:07:00",
          endDate: "2019-04-21 00:17:00",
          location: "London",
          countryCode: "UK",
          imagePath: "beach-cleanup.png"
        },
        {
          id:2,
          name: "Jims second test event",
          startDate: "2019-04-22 00:07:00",
          endDate: "2019-04-22 00:17:00",
          location: "Cardiff",
          countryCode: "UK",
          imagePath: "beach-cleanup2.png"
        },
        {
          id:3,
          name: "Jims third test event",
          startDate: "2019-04-21 00:13:00",
          endDate: "2019-04-21 00:17:00",
          location: "Manchester",
          countryCode: "UK",
          imagePath: "beach-cleanup.png"
        },
        {
          id:4,
          name: "Jims fourth test event",
          startDate: "2019-04-19 00:09:00",
          endDate: "2019-04-19 00:13:00",
          location: "Chicago",
          countryCode: "USA",
          imagePath: "beach-cleanup2.png"
        },
        {
          id:5,
          name: "Jims fifth test event",
          startDate: "2019-04-22 00:07:00",
          endDate: "2019-04-22 00:17:00",
          location: "San Fran",
          countryCode: "USA",
          imagePath: "beach-cleanup.png"
        },
        {
          id:6,
          name: "Jims sixth test event",
          startDate: "2019-04-21 00:09:00",
          endDate: "2019-04-21 00:12:00",
          location: "London",
          countryCode: "UK",
          imagePath: "beach-cleanup2.png"
        },

      ]
      this.setState({
        events: testEvents
      })  
    //})
  }

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
    const styles= 
    {
      container:{
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
      },
      logo: {
        margin: '0 auto',
      },
      body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        filter: this.state.menuOpen ? 'blur(2px)':null,
        transition: 'filter 0.5s ease',
      },
      submitEvent: {
        marginTop: '50px'
      }
    }    
    const menu = ['About Us','Our Products','Services','FAQ','Contact Us']
    const menuItems = menu.map((val,index)=>{
      return (
        <MenuItem 
          key={index} 
          delay={`${index * 0.1}s`}
          onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>)
    });  

    return (
      <div className="App">
        <TitleBar messageCount={this.state.messageCount}/>
        <div style={styles.container}>
          <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white'/>
        </div>
        <Menu open={this.state.menuOpen}>
            {menuItems}
        </Menu>
        <Header />
        <EventList events={this.state.events}/>
        <div className="mobileButtons">
            <div>
              <FindEvent />
            </div>
            <div style={styles.submitEvent}>
              <SubmitEvent />
            </div>
        </div> 
        <Footer />
      </div>
    );
  }
}

export default App;
