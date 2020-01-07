import React from 'react'

const InputBox = (props) => {
    return(
        <input
        onChange={props.onChange}
        className={props.customClassName}
        type={props.type}
        value={props.text}
        placeholder={props.placeholder}
        onClick={props.onClick} />
    );
};

export default InputBox;