import React from 'react'
import Icon from './Icon';

const Star = (props)=> {
    const stars = [];
    for (let i = 1; i < props.rating; i++) {
        stars.push(<Icon type="fas fa-star checked"/>)
    }
    return(
        
    );
}

