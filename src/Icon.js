import React from 'react'

const Icon = (props) => {
    return(
        <span className={props.type}><i className={`fas fa-${props.icon}`}></i> {props.numOfLikes}</span>
    );
};

export default Icon;