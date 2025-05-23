import React from "react";
import { Link } from 'react-router-dom'
import { getAllArticles } from '../api.ts'

// interface for json placeholder
// interface Article {
//     title: string
//     body: string
//     id: number
// }

// interface for newsdata.io
interface Article  {
    title: string
    source_name?: string
    description?: string
    pubDate?: string
    source_url?: string
    link: string
    image_url?: string
    category?: string
}

type ArticlesProps = {
    searchTerm?: string
}

export default function Articles( { searchTerm }: { searchTerm?: string } ) {

    const [articles, setArticles] = React.useState<Article[]>([])
    const [isLoading, setIsLoading] = React.useState<boolean>(true)
    const [error, setError] = React.useState<string | null>(null)
    const hasFetched = React.useRef(false)

    
    //newsdata.io version
    React.useEffect(() => {

        async function loadArticles() {
            setIsLoading(true)
            setError(null)

            try {
                const data = await getAllArticles(searchTerm ?? undefined)
                console.log("API response:", data)
                if (data?.results?.length) {
                    const uniqueArticles = data.results.filter(
                        (article: Article, index: number, self: Article[] ) =>
                            index === self.findIndex((a:Article) => a.title === article.title)
                    )
                    setArticles(uniqueArticles.slice(0,9) as Article[])
                } else {
                    setError('No articles found.')
                }

            } catch (err) {
                console.log(err)
                setError("Failed to load articles")
            } finally {
                setIsLoading(false)
            }
        }
        loadArticles()
    }, [searchTerm])


    if (isLoading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    console.log('articles:', articles);

    return (
        <>
            {articles.length > 0 ? (
                <>
                    <div className="featured-article">
                        <Link 
                            to={articles[0].link}
                            key={articles[0].link} 
                            className="article-inner"
                        >
                            <div className="article-container">
                                <div className="article-img-container">
                                    <img src={articles[0].image_url} alt="image unavailable" />                        
                                    {/* <img src="https://i.insider.com/67bec42be015c5d98a6af08a?width=2000&format=jpeg&auto=webp" alt="image unavailable" />                         */}
                                </div>
                                <div className="article-text">
                                    <h2>{articles[0].title}</h2>
                                    {articles[0].description && articles[0].description.length > 125 ? (
                                        <p>
                                            {articles[0].description.substring(0,125) + "..."} 
                                            <span>read more</span>
                                        </p>
                                    ) : (
                                        articles[0].description && <p>{articles[0].description}</p>
                                    )}
                                    {/* {<p id="article-paragraph">{articles[0].body.substring(0,125) + "..."} <span>read more</span></p>} */}
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="article-grid">
                        {articles.slice(1).map((article) => (
                           <Link 
                                to={article.link}
                                key={article.link} 
                                className="article-inner"
                            >
                                <div className="article-container">
                                    <div className="article-img-container">
                                        <img src={article.image_url} alt="image unavailable" />                        
                                        {/* <img src="https://i.insider.com/67bec42be015c5d98a6af08a?width=2000&format=jpeg&auto=webp" alt="image unavailable" />                         */}
                                    </div>
                                    <div className="article-text">
                                        <h2>{article.title}</h2>
                                        {article.description && article.description.length > 125 ? (
                                            <p>
                                                {article.description.substring(0,125) + "..."} 
                                                <span>read more</span>
                                            </p>
                                        ) : (
                                            article.description && <p>{article.description}</p>
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

//json placeholder version
 // React.useEffect(() => {
    //     console.log(category)
    //     console.log(articles[1]?.title)
    // }, [articles])

    // const articleElements = articles.map(article => {
    //     return (
    //         <Link 
    //             to={article.link}
    //             key={article.link} 
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