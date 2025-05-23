import React, {useState} from "react";
import { useOutletContext } from "react-router-dom";
import Header from "../components/Header.tsx";
import Articles  from '../components/Articles.tsx'

type ContextType = { searchTerm: string }

export default function Home() {   
    const { searchTerm } = useOutletContext<ContextType>()

    return (
        <>
        {/* <Header onSearch={setSearchTerm}/> */}
        <div className="main-section">
            <h1>Hot Topics</h1>
            <Articles searchTerm={searchTerm} />
        </div>
        </>
    )
}