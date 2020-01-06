import React from 'react'
import Hyperlink from './Hyperlink'
import Icon from './Icon'
import InputForm from './InputForm'

const Jumbotron = () => {
    return (
        <header className="jumbotron">
            <div className="container">
                <h1><Icon type="" icon="campground" />Welcome to YelpCamp!</h1>
                <p>View our hand-picked campgrounds from all over the world</p>
                <p>
                    <Hyperlink customClassName="btn btn-primary btn-lg" link="/" text="Add New Campground" />
                </p>
                <InputForm />
                <p></p>    
            </div>
        </header>
    );
};

export default Jumbotron;