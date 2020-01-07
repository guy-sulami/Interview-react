import React from 'react'

const Icon = (props) => {
    return(
        <span style={{color: props.color, marginInlineEnd: '5px'}} className={props.type}><i className={`fas fa-${props.icon}`}></i> {props.numOfLikes}</span>
    );
};

export default Icon;