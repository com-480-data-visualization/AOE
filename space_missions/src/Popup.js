// Popup.js

import React from 'react';
import './Popup.css';

const Popup = ({ content, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-btn" onClick={onClose}>Close</button>
        {content}
      </div>
    </div>
  );
};

export default Popup;
