import React from 'react'
import { Link } from 'react-router-dom'
import { getSportsArticles } from '../api.js'

export default function Sports() {
    const [articles, setArticles] = React.useState<Article[]>([])

    interface Article {
        title: string
        body: string
        id: number
    }
// interface for newsapi
    // interface Article  {
    //     title: string
    //     author?: string
    //     description?: string
    //     content: string
    //     publishedAt?: string
    //     source?: {name: string}
    //     url: string
    //     urlToImage?: string
    // }

    React.useEffect(() => {
        async function loadArticles() {
            try {
                const data = await getSportsArticles()
                setArticles(data.slice(0,17) as Article[])
            } catch (err) {
                console.log(err)
            }
        }
        loadArticles()
    })

    const articleElements = articles.map(article => {
        return (
            <Link 
                // to={article.url}
                className="article-inner"
            >
                <div className="article-container" key={article.title}>
                    <div className="article-img-container">
                        {/* <img src={article.urlToImage} alt="image unavailable" />                         */}
                        <img src="https://i.insider.com/67bec42be015c5d98a6af08a?width=2000&format=jpeg&auto=webp" alt="image unavailable" />                        

                    </div>
                    <div className="article-text">
                        <h2>{article.title}</h2>
                        {/* <p>{article.description}</p> */}
                        {<p id="article-paragraph">{article.body.substring(0,125) + "..."} <a href={article.url}>read more</a></p>}
                    </div>
                </div>
            </Link>
        )
    })
    
    return (
        <div className="main-section">
            <h1>Sports</h1>
            <div className="featured-article">{articleElements[0]}</div>
            <div className="article-grid">
                {articleElements.slice(1)}
            </div>
        </div>
    )
}