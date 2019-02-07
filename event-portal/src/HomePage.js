import React, { Component } from 'react';
import TitleBar from './components/TitleBar/TitleBar';
import Menu from './components/Menu/Menu';
import MenuButton from './components/Menu/MenuButton/MenuButton';
import Header from './components/Header/Header';
import EventList from './components/EventList/EventList';
import FindEventButton from './components/Buttons/FindEvent/FindEvent';
import SubmitEventButton from './components/Buttons/SubmitEvent/SubmitEvent';
import ActionBar from './components/ActionBar/ActionBar';
import Map from './components/Map/Map';
import EventSearchBox from './components/EventSearchBox/EventSearchBox';
import RecentEventsList from './components/RecentEventsList/RecentEventsList';
import Footer from './components/Footer/Footer';
import './HomePage.css';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state={
        messageCount: 0,
        events: [],  //this is used to load in the default events
        mapCentre: "San Francisco"
    }

    this.setMapCentre = this.setMapCentre.bind(this);
  }

  componentDidMount(){
    this.getHomePageEvents();
  }
  
    setMapCentre(searchText){
        this.setState({
            mapCentre: searchText
        })
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

  render() {
    const styles= 
    {
      submitEvent: {
        marginTop: '50px'
      }
    }    

    return (
      <div className="App">
        <TitleBar messageCount={this.props.messageCount}/>
        <div style={this.props.containerStyle}>
          <MenuButton open={this.props.menuOpen} onClick={()=>this.props.handleMenuClick()} color='white'/>
        </div>
        <Menu open={this.props.menuOpen}>
            {this.props.menuItems}
        </Menu>
        <Header />
        <EventList events={this.state.events}/>
        <div className="mobileButtons">
            <div>
              <FindEventButton style={{}}/>
            </div>
            <div style={styles.submitEvent}>
              <SubmitEventButton />
            </div>
        </div> 
        <div className="desktop">
            <ActionBar />
            <div className="MapEventSearch">
                <Map mapCentre={this.state.mapCentre}/>
                <EventSearchBox handleSearch={this.setMapCentre}/>
            </div>
            <RecentEventsList events={this.state.events}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
