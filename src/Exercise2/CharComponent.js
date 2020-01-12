import React from 'react';

const CharComponent = (props) => {
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
    return(<p style={mystyle} onClick={props.deleteItem}>{props.character}</p>)
 
}

export default CharComponent;