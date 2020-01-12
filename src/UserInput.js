import React from 'react';
import './UserInput.css'

const userInput = (props) => {
    return(
        <div className="UserInput">
        <input type="text" onChange={props.click} value={props.username}></input>
        </div>
    );
}
export default userInput;