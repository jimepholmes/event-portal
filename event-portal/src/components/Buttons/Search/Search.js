import React from 'react';
import './Search.css';

class SearchButton extends React.Component{
    render(){
        return (
            <div className="SearchButton">
                <a onClick={this.props.onClick} style={this.props.style}>SEARCH</a>
            </div>
        )        
    }
}

export default SearchButton;