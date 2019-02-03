import React, { Component } from 'react';
import logo from './logo.svg';
import TitleBar from './components/TitleBar/TitleBar';
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem/MenuItem';
import MenuButton from './components/Menu/MenuButton/MenuButton';
import Header from './components/Header/Header';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      menuOpen:false,
      messageCount: 0
    }
    setInterval(()=>this.updateMessageCount(), 2000);   //this line also binds 'this' to the function
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
