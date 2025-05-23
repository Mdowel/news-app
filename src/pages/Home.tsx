import { useOutletContext } from "react-router-dom";
import Articles  from '../components/Articles.tsx'

type ContextType = { searchTerm: string }

export default function Home() {   
    const { searchTerm } = useOutletContext<ContextType>()

    return (
        <>
        <div className="main-section">
            <h1>Hot Topics</h1>
            <Articles searchTerm={searchTerm} />
        </div>
        </>
    )
}