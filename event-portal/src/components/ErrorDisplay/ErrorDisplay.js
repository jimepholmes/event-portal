import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ErrorDisplay.css';

const ErrorDisplay = props => {
    return (
        <h1 className={props.style}>{props.message}</h1>
    )
}

ErrorDisplay.propTypes = {
    message: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired
};

ErrorDisplay.defaultProps = {
    message: " ",
    style: "hidden"
};

export default ErrorDisplay;