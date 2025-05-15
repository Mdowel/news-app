import React from "react";
import { Link, NavLink } from 'react-router-dom'


export default function Header({ onSearch }: { onSearch: (term: string) => void }) {
    const [inputValue, setInputValue] = React.useState('')

    const activeStyles = {
        fontWeight: 'bold',
        color: '#51a201',
        textDecoration: 'underline'
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        onSearch(inputValue)
    }

    const getNavLinkStyles = ({ isActive }:{ isActive: boolean }) => 
        isActive ? activeStyles : null

    return (
        <div className="header">
            <Link to="/" className='logo'>News<span>Kiwi</span> <i className="fa-solid fa-kiwi-bird"></i></Link>
            {/* <nav>
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

            </nav> */}
            <form 
                className="search-box"
                onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        placeholder="Search articles..."
                    />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}