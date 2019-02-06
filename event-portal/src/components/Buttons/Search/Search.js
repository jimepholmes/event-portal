import React from 'react';
import './Search.css';

class SearchButton extends React.Component{
    render(){
        return (
            <div className="SearchButton">
                <a href="" style={this.props.style}>SEARCH</a>
            </div>
        )        
    }
}

export default SearchButton;