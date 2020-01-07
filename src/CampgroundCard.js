import React from 'react'
import Hyperlink from './Hyperlink'
import Icon from './Icon'
import './CampgroundCard.css'
import Stars from './Stars';

const CampgroundCard = (props) => {
    return(
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div className="card">
            <img id="image" className="card-img-top" alt="Not valid" src={props.imgSrc}/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <div>
                    <Icon type="badge label-primary" icon="thumbs-up" numOfLikes={props.numOfLikes}/>
                </div>
                <Stars checkedStarsCount={props.checkedStarsCount}/>
                <div className="float-right">
                    <Hyperlink customClassName="btn btn-sm btn-primary" link="/" text="More Info"/>
                </div>
            </div>
        </div>
    </div>
    );
};

export default CampgroundCard;