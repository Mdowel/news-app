export async function getArticles() {
    const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=8545fe54b37e43e3bea9d5f9ba92764a')
    if(!res.ok) 
    throw{
        message: 'Failed to fetch articles',
        statusText: res.statusText,
        status: res.status
    }
    const data = await res.json()
    // console.log(data.articles)
    return data.articles
}