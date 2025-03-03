import React from "react"
import { Link } from 'react-router-dom'
import { getEntertainmentArticles } from '../api.js'

export default function Entertainment() {
    const [articles, setArticles] = React.useState<Article[]>([])


    React.useEffect(() => {
        async function loadArticles() {
            try {
                const data = await getEntertainmentArticles()
                setArticles(data as Article[])
            } catch (err) {
                console.log(err)
            }
        }
        loadArticles()
    }, [])

    const articleElements = articles.map(article => {
        return (
            <div className="article-container" key={article.title}>
            <Link 
                to={article.url}
                className="article-inner"
            >
                <div className="article-img-container">
                    <img src={article.urlToImage} alt="image unavailable" />                        
                </div>
                <div className="article-text">
                    <h2>{article.title}</h2>
                    {/* <p>{article.description}</p> */}
                    <p>{article.body}</p>
                </div>
            </Link>
        </div>
        )
    })

    return (
        <div className="main-section">
            {articleElements}
        </div>
    )
}