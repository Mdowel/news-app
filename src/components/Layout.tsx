import React from "react";
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
    const [searchTerm, setSearchTerm] = React.useState<string>('')

    return (
        <div className="site-wrapper">
            <Header 
                onSearch={setSearchTerm} 
                onResetSearch={() => setSearchTerm('')}
            />
            <main>
                <Outlet context={{ searchTerm }} />
            </main>
            <Footer />
        </div>
    )
}