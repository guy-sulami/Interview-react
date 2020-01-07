import React from 'react'
import NavItem from './NavItem'
import Hyperlink from './Hyperlink'

const PagesNavigation = () => {
    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                <NavItem customClassName="page-item disabled">
                    <Hyperlink customClassName="page-link" text="First"/>
                </NavItem>
                <NavItem customClassName="page-item disabled">
                    <Hyperlink customClassName="page-link" text="«"/>
                </NavItem>
                <NavItem customClassName="page-item-disabled">
                    <Hyperlink customClassName="page-link" text="1"/>
                </NavItem>
                <NavItem>
                    <Hyperlink customClassName="page-link" link="/" text="2"/>
                </NavItem>
                <NavItem>
                    <Hyperlink customClassName="page-link" link="/" text="»"/>
                </NavItem>
                <NavItem>
                    <Hyperlink customClassName="page-link" link="/" text="Last"/>
                </NavItem>
            </ul>
        </nav>
    );
}

export default PagesNavigation;