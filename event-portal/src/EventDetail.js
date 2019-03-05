import React, { Component } from 'react';
import TitleBar from './components/TitleBar/TitleBar';
import Menu from './components/Menu/Menu';
import MenuButton from './components/Menu/MenuButton/MenuButton';
import Header from './components/Header/Header';
import SubmitEventButton from './components/Buttons/SubmitEvent/SubmitEvent';
import ActionBar from './components/ActionBar/ActionBar';
import Map from './components/Map/Map';
import EventDetailBox from './components/EventDetailBox/EventDetailBox';
import Footer from './components/Footer/Footer';
import API from './util/API';
import Utils from './util/utils';
import './EventDetail.css';

class EventDetail extends Component {
  constructor(props){
    super(props);
    this.state={
        messageCount: 0,
        event: {},
        mapCentre: "San Francisco"
    }

    this.setMapCentre = this.setMapCentre.bind(this);
  }

  componentDidMount(){
    console.log(`qs: ${Utils.getUrlParameter("evt")}`);
    if (Utils.getUrlParameter("evt").length>0){
        this.getEvent();
    }
  }
  
    setMapCentre(searchText){
        this.setState({
            mapCentre: searchText
        })
    }

  getEvent(){
    API.getEvent(Utils.getCampaignGUID(), Utils.getUrlParameter("evt")).then(theEvent => {
        console.log("got the event:")
        console.log(theEvent);
        theEvent[0].mapLocation = `${theEvent[0].lat} ${theEvent[0].lng}`;
        console.log(`maploc: ${theEvent[0].mapLocation}`)
        this.setState({
            event: theEvent[0]
          })  
    })
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
        <TitleBar loggedIn={this.props.loggedIn} messageCount={this.props.messageCount}/>
        <div style={this.props.containerStyle}>
          <MenuButton open={this.props.menuOpen} onClick={()=>this.props.handleMenuClick()} color='white'/>
        </div>
        <Menu open={this.props.menuOpen}>
            {this.props.menuItems}
        </Menu>
        <Header headerText="EARTH DAY 2019"/>
        <div className="mobileButtons">
            <div>

            </div>
            <div style={styles.submitEvent}>
              <SubmitEventButton />
            </div>
        </div> 
        <div className="desktop">
            <div className="MapEventSearch">
                <Map mapCentre={this.state.event.mapLocation}/>
                <EventDetailBox eventDetail={this.state.event}/>
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default EventDetail;
