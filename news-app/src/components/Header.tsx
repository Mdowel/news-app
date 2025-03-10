import React from "react";
import { Link, NavLink } from 'react-router-dom'


export default function Header() {

    const activeStyles = {
        fontWeight: 'bold',
        color: '#fd9a85',
        textDecoration: 'underline'
    }

    const getNavLinkStyles = ({ isActive }:{ isActive: boolean }) => 
        isActive ? activeStyles : null

    return (
        <div className="header">
            <Link to="/" className='logo'>News<span>Kiwi</span> <i className="fa-solid fa-kiwi-bird"></i></Link>
            <nav>
                <NavLink
                    to='/entertainment'
                    style={ getNavLinkStyles }
                >
                  Entertainment  
                </NavLink>
                <NavLink
                    to='/health'
                    style={ getNavLinkStyles }
                >
                    Health
                </NavLink>
                <NavLink
                    to='/sports'
                    style={ getNavLinkStyles }
                >
                    Sports
                </NavLink>

            </nav>
        </div>
    )
}