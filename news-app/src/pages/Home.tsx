import React from "react";
import {getArticles} from '../api.js'

export default function Home() {
    const [articles, setArticles] = React.useState([])

    React.useEffect(() => {
        async function loadArticles() {
            try {
                const data = await getArticles()
                setArticles(data)
            } catch (err) {
                console.log(err)
            }
        }
        loadArticles()
    }, [])

    React.useEffect(() => {
        console.log(articles[1]?.title)
    }, [articles])

    // trying to get somethingggg to show in main component from api
    const articleElements = articles.map(article => {
        <div>
            {article.title}
        </div>
    })
    
    return (
        <>
            <div>homepage</div>
            {articleElements}
            
        </>
    )
}