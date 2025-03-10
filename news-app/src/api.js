export async function getAllArticles() {
    // const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=8545fe54b37e43e3bea9d5f9ba92764a')
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if(!res.ok) 
        throw {
            message: 'Failed to fetch articles.',
            statusText: res.statusText,
            status: res.status
        }
    const data = await res.json()
    // console.log(data.articles)
    console.log(data)
    // return data.articles
    return data
}

export async function getEntertainmentArticles() {
    // const res = await fetch('https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=8545fe54b37e43e3bea9d5f9ba92764a')
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if(!res.ok)
        throw {
            message: 'Failed to fetch articles.',
            statusText: res.statusText,
            status: res.status
        }
    const data = await res.json()
    // return data.articles
    return data
}

export async function getHealthArticles() {
    // const res = await fetch('https://newsapi.org/v2/top-headlines?category=health&apiKey=8545fe54b37e43e3bea9d5f9ba92764a')
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if(!res.ok)
        throw {
            message: 'Failed to fetch articles.',
            statusText: res.statusText,
            status: res.status
        }
    const data = await res.json()
    // return data.articles
    return data
}

export async function getSportsArticles() {
    // const res = await fetch('https://newsapi.org/v2/top-headlines?category=sports&apiKey=8545fe54b37e43e3bea9d5f9ba92764a')
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if(!res.ok)
        throw {
            message: 'Failed to fetch articles.',
            statusText: res.statusText,
            status: res.status
        }
    const data = await res.json()
    // return data.articles
    return data
}