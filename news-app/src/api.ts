
// //newsAPI version
export async function getAllArticles( category? : string) {
    const apiUrl = category
        ? `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=8545fe54b37e43e3bea9d5f9ba92764a`
        : `https://newsapi.org/v2/top-headlines?country=us&apiKey=8545fe54b37e43e3bea9d5f9ba92764a`

    const res = await fetch(apiUrl)
    if(!res.ok) 
        throw {
            message: 'Failed to fetch articles.',
            statusText: res.statusText,
            status: res.status
        }
    const data = await res.json()
    console.log('category in api.ts:', category);
    return data
}
        
//json placeholder version
// export async function getAllArticles(category?: string) {
//     try{
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//         if(!res.ok) 
//             throw {
//                 message: 'Failed to fetch articles.',
//                 statusText: res.statusText,
//                 status: res.status
//             }
//         const data = await res.json() 

//         if (category) {
//             return data.filter((article: any) => article.title.includes(category))
//         }
//         // console.log(data)
//         return data
//     } catch (error) {
//         console.log("Error fetching articles:", error)
//         return []
//     }
// }
                
                
                


// export async function getFilteredArticles(category) {
//     // const res = await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=8545fe54b37e43e3bea9d5f9ba92764a`)
//     if(!res.ok) 
//         throw {
//             message: 'Failed to fetch articles.',
//             statusText: res.statusText,
//             status: res.status
//         }
//     const data = await res.json()
//     console.log(data.articles)
//     return data.articles
// }


// export async function getEntertainmentArticles() {
//     // const res = await fetch('https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=8545fe54b37e43e3bea9d5f9ba92764a')
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     if(!res.ok)
//         throw {
//             message: 'Failed to fetch articles.',
//             statusText: res.statusText,
//             status: res.status
//         }
//     const data = await res.json()
//     // return data.articles
//     return data
// }

// export async function getHealthArticles() {
//     // const res = await fetch('https://newsapi.org/v2/top-headlines?category=health&apiKey=8545fe54b37e43e3bea9d5f9ba92764a')
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     if(!res.ok)
//         throw {
//             message: 'Failed to fetch articles.',
//             statusText: res.statusText,
//             status: res.status
//         }
//     const data = await res.json()
//     // return data.articles
//     return data
// }

// export async function getSportsArticles() {
//     // const res = await fetch('https://newsapi.org/v2/top-headlines?category=sports&apiKey=8545fe54b37e43e3bea9d5f9ba92764a')
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     if(!res.ok)
//         throw {
//             message: 'Failed to fetch articles.',
//             statusText: res.statusText,
//             status: res.status
//         }
//     const data = await res.json()
//     // return data.articles
//     return data
// }