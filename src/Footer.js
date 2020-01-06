import React from 'react'
import Hyperlink from './Hyperlink'
import './Footer.css'

const Footer = () => {
    return(
        <footer className="footer">
            <div className="container">
                <p className="text-muted">
                    &copy; YelpCamp 2019 | <Hyperlink link="/" text="Home"/> | <Hyperlink link="/" text="New Campground"/>
                </p>
            </div>
        </footer>
    );
}

export default Footer;