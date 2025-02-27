import React from "react";
import { Link, NavLink } from 'react-router-dom'
import {getEntertainmentArticles} from '../api.js'



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
            <Link href="/">home</Link>
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