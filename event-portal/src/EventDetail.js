import React, { Component } from 'react';
import TitleBar from './components/TitleBar/TitleBar';
import Menu from './components/Menu/Menu';
import MenuButton from './components/Menu/MenuButton/MenuButton';
import Header from './components/Header/Header';
import SubmitEventButton from './components/Buttons/SubmitEvent/SubmitEvent';
import ActionBar from './components/ActionBar/ActionBar';
import Map from './components/Map/Map';
import Footer from './components/Footer/Footer';
import API from './util/API';
import Utils from './util/utils';
import './EventDetail.css';
import * as queryString from "query-string";


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
      console.log("here");
      console.log(this.props);
    const parsedQuery = queryString.parse(this.props.location.search);
    console.log(`parsed: ${parsedQuery}`);
    this.getEvent();
  }
  
    setMapCentre(searchText){
        this.setState({
            mapCentre: searchText
        })
    }

  getEvent(){
    API.eventSearch(Utils.getCampaignGUID(), "", "", "", "", "", "", "", "", "", "", "", true, false).then(theEvents => {
        console.log(theEvents);
        this.setState({
            events: theEvents
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
            <ActionBar />
            <div className="MapEventSearch">
                <Map mapCentre={this.state.mapCentre}/>
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default EventDetail;
