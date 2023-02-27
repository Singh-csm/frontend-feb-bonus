import React from 'react';
import "./popup.css"
const Popup = (props) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={props.closePopup}>X</button>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;