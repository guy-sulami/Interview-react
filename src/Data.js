import React from 'react'
import fakeData from './fakeData';
import CampgroundCard from './CampgroundCard'

const Data = (props) => {
    const cardList = [...fakeData];

    return (
        <div className="row text-center">
            {cardList.map((card, i) => {return(
                card.name.toLowerCase().includes(props.search.toLowerCase()) ?
                <CampgroundCard
                key={i}
                name={card.name}
                imgSrc={card.imgSrc}
                numOfLikes={card.numOfLikes}
                checkedStarsCount={card.checkedStarsCount} /> : ''
            )})}
        </div>
    );
};

export default Data;