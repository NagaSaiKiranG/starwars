import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(<nav className="navbar">
        <NavLink to='/home' className="navlink brand">Star wars</NavLink>
        <NavLink to='/people' className="navlink">People</NavLink>
        <NavLink to='/about' className="navlink">About</NavLink>
    </nav>)
}

export default Navbar;