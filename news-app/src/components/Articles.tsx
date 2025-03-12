import React from "react";
import { Link } from 'react-router-dom'
import { getAllArticles } from '../api.ts'

// interface for json placeholder
// interface Article {
//     title: string
//     body: string
//     id: number
// }

// interface for newsapi
interface Article  {
    title: string
    author?: string
    description?: string
    content: string
    publishedAt?: string
    source?: {name: string}
    url: string
    urlToImage?: string
    category?: string
}

interface ArticlesProps {
    category?: string
}

export default function Articles( {category}: ArticlesProps ) {

    const [articles, setArticles] = React.useState<Article[]>([])
    const [isLoading, setIsLoading] = React.useState<boolean>(true)
    const [error, setError] = React.useState<string | null>(null)


    //newsapi version
    React.useEffect(() => {
        async function loadArticles() {
            try {
                const data = await getAllArticles(category)
                console.log("API response:", data)
                if (data?.articles) {
                    // const filteredArticles = category
                    //     ? data.articles.filter((article: Article) => article.category === category)
                    //     : data.articles;
                    setArticles(data.articles.slice(0, 17) as Article[])
                        // ( above might be setArticles(filteredArticles.slice(0, 17)) )
                } else {
                    setError("No articles found.")
                }
            } catch (err) {
                console.log(err)
                setError("Failed to load articles")
            } finally {
                setIsLoading(false)
            }
        }
        loadArticles()
    }, [category])
    console.log(articles);
    console.log("Category prop in Articles:", category);
    
    //json placeholder version
    // React.useEffect(() => {
    //     async function loadArticles() {
    //         try {
    //             const data = await getAllArticles(category)
    //             console.log("API response:", data)
    //             // const filteredArticles = category
    //             // ? data.filter((article: Article) => article.category === category)
    //             // : data
                
    //             setArticles(data as Article[])
    //         } catch (err) {
    //             console.log(err)
    //             setError("Failed to load articles")
    //         } finally {
    //             setIsLoading(false)
    //         }
    //     }
    //     loadArticles()
    // }, [])
    // console.log(articles);
    // console.log("Category prop in Articles:", category);


    // if (isLoading)
    //     return <p>Loading articles...</p>
    if (error)
        return <p className="error">{error}</p>

   

    return (
        <>
            {articles.length > 0 ? (
                <>
                    <div className="featured-article">
                        <Link 
                            to={articles[0].url}
                            key={articles[0].url} 
                            className="article-inner"
                        >
                            <div className="article-container">
                                <div className="article-img-container">
                                    <img src={articles[0].urlToImage} alt="image unavailable" />                        
                                    {/* <img src="https://i.insider.com/67bec42be015c5d98a6af08a?width=2000&format=jpeg&auto=webp" alt="image unavailable" />                         */}
                                </div>
                                <div className="article-text">
                                    <h2>{articles[0].title}</h2>
                                    {articles[0].content && articles[0].content.length > 125 ? (
                                        <p>
                                            {articles[0].content.substring(0,125) + "..."} 
                                            <span>read more</span>
                                        </p>
                                    ) : (
                                        articles[0].content && <p>{articles[0].content}</p>
                                    )}
                                    {/* {<p id="article-paragraph">{articles[0].body.substring(0,125) + "..."} <span>read more</span></p>} */}
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="article-grid">
                        {articles.slice(1).map((article) => (
                           <Link 
                                to={article.url}
                                key={article.url} 
                                className="article-inner"
                            >
                                <div className="article-container">
                                    <div className="article-img-container">
                                        <img src={article.urlToImage} alt="image unavailable" />                        
                                        {/* <img src="https://i.insider.com/67bec42be015c5d98a6af08a?width=2000&format=jpeg&auto=webp" alt="image unavailable" />                         */}
                                    </div>
                                    <div className="article-text">
                                        <h2>{article.title}</h2>
                                        {article.content && article.content.length > 125 ? (
                                            <p>
                                                {article.content.substring(0,125) + "..."} 
                                                <span>read more</span>
                                            </p>
                                        ) : (
                                            article.content && <p>{article.content}</p>
                                        )}
                                        {/* {<p id="article-paragraph">{articles[0].body.substring(0,125) + "..."} <span>read more</span></p>} */}
                                    </div>
                                </div>
                            </Link> 
                        ))}
                    </div>
                </>
            ) : (
                <p>No articles found.</p>
            )}
        </>
    )
}


 // React.useEffect(() => {
    //     console.log(category)
    //     console.log(articles[1]?.title)
    // }, [articles])

    // const articleElements = articles.map(article => {
    //     return (
    //         <Link 
    //             to={article.url}
    //             key={article.url} 
    //             className="article-inner"
    //         >
    //             <div className="article-container">
    //                 <div className="article-img-container">
    //                     {/* <img src={article.urlToImage} alt="image unavailable" />                         */}
    //                     <img src="https://i.insider.com/67bec42be015c5d98a6af08a?width=2000&format=jpeg&auto=webp" alt="image unavailable" />                        
    //                 </div>
    //                 <div className="article-text">
    //                     <h2>{article.title}</h2>
    //                     {article.content && article.content.length > 125 ? (
    //                         <p>
    //                             {article.content.substring(0,125) + "..."} 
    //                             <span>read more</span>
    //                         </p>
    //                     ) : (
    //                         article.content && <p>{article.content}</p>
    //                     )}
    //                     {/* {<p id="article-paragraph">{article.body.substring(0,125) + "..."} <span>read more</span></p>} */}
    //                 </div>
    //             </div>
    //         </Link>
    //     )
    // })



            // <div className="featured-article">{articleElements[0]}</div>
            // <div className="article-grid">
            //     {articleElements.slice(1)}
            // </div>