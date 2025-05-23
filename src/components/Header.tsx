import React from "react";
import { Link, NavLink } from 'react-router-dom'

type HeaderProps = {
    onSearch: (term:string) => void
    onResetSearch: () => void
}

export default function Header({ onSearch, onResetSearch }: HeaderProps) {
    console.log('Header rendered')
    const [inputValue, setInputValue] = React.useState('')
    // const activeStyles = {
    //     fontWeight: 'bold',
    //     color: '#51a201',
    //     textDecoration: 'underline'
    // }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        const trimmedInput = inputValue.trim()
        console.log('submitted search term:', trimmedInput)
        onSearch(trimmedInput)
    }

    // const getNavLinkStyles = ({ isActive }:{ isActive: boolean }) => 
    //     isActive ? activeStyles : null

    return (
        <div className="header">
            <Link 
                to="/" 
                className='logo'
                onClick = {() => onResetSearch()}
            >
                    News<span>Kiwi</span> 
                    <i className="fa-solid fa-kiwi-bird"></i>
            </Link>
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
                        aria-label="Search articles"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        placeholder="Search articles..."
                    />
                <button type="button" onClick={handleSubmit} disabled = {!inputValue.trim()}>Search</button>
            </form>
        </div>
    )
}