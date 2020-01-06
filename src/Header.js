import React from 'react'
import Hyperlink from './Hyperlink'
import NavItem from './NavItem';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <Hyperlink customClassName="navbar-brand" link="/" text="YelpCamp"/>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" 
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <NavItem customClassName="nav-item active">
                        <Hyperlink customClassName="nav-link" link="/" text="Home"/>
                    </NavItem>
                </ul>
                <ul className="navbar-nav navbar-right">
                    <NavItem customClassName="nav-item">
                        <Hyperlink customClassName="nav-link" link="/" text="Login" />   
                    </NavItem>
                    <NavItem customClassName="nav-item">
                        <Hyperlink customClassName="nav-link" link="/" text="Sign Up" />
                    </NavItem>
                </ul>
            </div>
        </nav>
    );
}

export default Header;

