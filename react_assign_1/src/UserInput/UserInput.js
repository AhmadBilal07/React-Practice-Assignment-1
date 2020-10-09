import React from 'react';

const userInput = (props) => {
const style = {
    border:"2px solid red",
    "margin": "20px"
}
return (
    <input type="text" style={style} onChange = {props.Change} value={props.userName}/>
    )


};
export default userInput;