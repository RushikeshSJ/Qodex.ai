import React from 'react';
import './ErrorDisplay.css';

const ErrorDisplay = ({ message }) => {
  if (!message) return null;
  return <p className="error-message">{message}</p>;
};

export default ErrorDisplay;