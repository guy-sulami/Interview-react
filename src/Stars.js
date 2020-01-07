import React from 'react'
import Icon from './Icon';

const Stars = (props) => {
    const starIcons = [];
    const maxStars = 5;

    for (let i = 0; i < maxStars; i++) {
        starIcons.push(<Icon color={i < props.checkedStarsCount ? "orange" : ''} key={i} type="fas fa-star checked" />);
    }

    return (
        props.checkedStarsCount == 0 ?
            <em class="float-left">No Reviews Yet</em>
            :
            <div className="float-left">
                {
                    starIcons.map(icon => { return icon })
                }
            </div>
    );
}

export default Stars;

