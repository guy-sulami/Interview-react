import React from 'react'

const InputBox = (props) => {
    return(
        <input className={props.customClassName} type={props.type} value={props.text} placeholder={props.placeholder}></input>
    );
};

export default InputBox;