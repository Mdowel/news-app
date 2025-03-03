import React from 'react'
import { Link } from 'react-router-dom'
import { getHealthArticles } from '../api.js'

export default function Health() {
    const [articles, setArticles] = React.useState<Article[]>([])

    React.useEffect(() => {
        async function loadArticles() {
            try {
                const data = await getHealthArticles()
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
                    <p>{article.description}</p>
                </div>
            </Link>
        </div>
        )
    })

    return (
        <div className="main-section">
            <h1>Hot Topics</h1>
            <div className="featured-article">{articleElements[0]}</div>
            <div className="article-grid">
                {articleElements.slice(1)}
            </div>
        </div>
    )
}