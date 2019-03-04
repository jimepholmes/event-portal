import React, { Component } from 'react';
import TitleBar from './components/TitleBar/TitleBar';
import Menu from './components/Menu/Menu';
import MenuButton from './components/Menu/MenuButton/MenuButton';
import Header from './components/Header/Header';
import EventList from './components/EventList/EventList';
import RecentEventsList from './components/RecentEventsList/RecentEventsList';
import GenericButton from './components/Buttons/Generic/Generic';
import Footer from './components/Footer/Footer';
import API from './util/API';
import Utils from './util/utils';
import './NGOHome.css';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state={
        events: [],  //this is used to load in the default events
        NGOUser: false
    }

  }

  componentDidMount(){
    //check that its an NGO user (or an admin) who is logged in!
    API.isNGO(Utils.getCookie("pmev_session_guid"))
    .then(userInfo => {
        if (userInfo.response == "success"){
            this.setState({
                NGOUser: true
            })                    
            //get the NGO events
            this.getNGOEvents();
        }
    })
  }
  
    getNGOEvents(){
        API.eventSearch(Utils.getCampaignGUID(), "", "", "", "", "", "", "", "", "", "", "", true, false).then(theEvents => {
            this.setState({
                events: theEvents
              })  
        })

        /*
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
        }

      ]
      this.setState({
        events: testEvents
      }) 
      */ 
  }

  buttonClick(){
      alert ("would show the create event page")
  }

  render() {
    const styles= 
    {
      newEvent: {
        marginTop: '50px',
        marginBottom: '20px'
      }
    }    

    if (this.state.NGOUser){
        return (
            <div className="App">
              <TitleBar loggedIn={this.props.loggedIn} messageCount="0"/>
              <div style={this.props.containerStyle}>
                <MenuButton open={this.props.menuOpen} onClick={()=>this.props.handleMenuClick()} color='white'/>
              </div>
              <Menu open={this.props.menuOpen}>
                  {this.props.menuItems}
              </Menu>
              <Header headerText="EARTH DAY 2019"/>
              <div className="desktop">
                  <RecentEventsList events={this.state.events} titleText="MY EVENTS"/>
              </div>
              <GenericButton enabled="true" containerStyle={styles.newEvent} caption="CREATE NEW EVENT" onChange={this.buttonClick}/>
              <Footer />
            </div>
          );      
    }else{
        return (
            <div className="App">
              <TitleBar loggedIn={this.props.loggedIn} messageCount="0"/>
              <div style={this.props.containerStyle}>
                <MenuButton open={this.props.menuOpen} onClick={()=>this.props.handleMenuClick()} color='white'/>
              </div>
              <Menu open={this.props.menuOpen}>
                  {this.props.menuItems}
              </Menu>
              <Header headerText="EARTH DAY 2019"/>
              <div className="desktop">
                  <br/>
                  Sorry, you need to be logged in as an NGO to view this page
              </div>
              <Footer />
            </div>
          )      
    }
  }
}

export default HomePage;
