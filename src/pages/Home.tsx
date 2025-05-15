import React, {useState} from "react";
import Header from "../components/Header.tsx";
import Articles  from '../components/Articles.tsx'

export default function Home() {   
    const [searchTerm, setSearchTerm] = React.useState<string | null>('')


    return (
        <>
        <Header onSearch={setSearchTerm}/>
        <div className="main-section">
            <h1>Hot Topics</h1>
            <Articles searchTerm={searchTerm} />
        </div>
        </>
    )
}