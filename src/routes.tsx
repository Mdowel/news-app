import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
import Entertainment from './pages/Entertainment'
import Health from './pages/Health'
import Sports from './pages/Sports'


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='entertainment' element={<Entertainment />} />
                    <Route path='health' element={<Health />} />
                    <Route path='sports' element={<Sports />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

// ReactDOM
//     .createRoot(document.getElementById('root'))
//     .render(<App />)