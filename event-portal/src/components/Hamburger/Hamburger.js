import React from 'react';
import './Hamburger.css'

//CHECK THIS OUT FOR HAMBURGER MENU:
// https://codepen.io/naturalclar/pen/zEwvbg


class Hamburger extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            menuOpen: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            menuOpen: this.state.menuOpen ? false : true
        })
    }

    getClassName(){
        let theClass = "bar";
        if (this.state.menuOpen!=true){
            theClass = "change bar";
        }
        return theClass;
    }

    render(){
        console.log(`rendering: menuOpen:${this.state.menuOpen}`)
        return (
            <div className="container" onClick={this.handleClick} >
                <div className={this.getClassName() + "1"}></div>
                <div className={this.getClassName() + "2"}></div>
                <div className={this.getClassName() + "3"}></div>
            </div>
        );
    }
}

export default Hamburger;