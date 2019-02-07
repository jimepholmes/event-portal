import React from 'react';
import SearchButton from '../Buttons/Search/Search';
import './EventSearchBox.css';

class EventSearchBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            term: ""
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this); 
    }

    handleSearch(event){
        this.props.handleSearch(this.state.term);
        event.preventDefault();
    }

    handleTextChange(event){
        this.setState({
            term: event.target.value
        })
    }

    render(){
        return (
            <div className="EventSearchBox">
                <div className="SearchControls">
                    <div className="EventSearchHeader">
                        FIND AN EVENT
                    </div>
                    <div className="EventSearchIntro">
                        Enter your location.
                    </div>
                    <div className="EventSearchInputBox">
                        <div class="inputWithIcon">
                            <input onChange={this.handleTextChange} type="text" placeholder="Search here..." />
                            <i class="fa fa-search fa-lg fa-fw" aria-hidden="true"></i>
                        </div>                        
                    </div>
                    <div className="SearchButton">
                        <SearchButton onClick={this.handleSearch}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventSearchBox;