import React from 'react'

const NavItem = (props) => {
    return(
        <li className={props.customClassName}>{props.children}</li>
    );
}

export default NavItem;