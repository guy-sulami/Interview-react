import React from 'react'

const Hyperlink = (props) => {
    function handleClick(e){
        e.preventDefault();
        alert("Sample Button, not functional");
    }  
    return (
        <a className={props.customClassName} href={props.link} onClick={handleClick}>{props.text}</a>
    );
};

export default Hyperlink;