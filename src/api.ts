
// //newsdata.io version
export async function getAllArticles(searchTerm? : string) {
    const apiUrl = searchTerm ?
    'https://newsdata.io/api/1/latest?apikey=pub_872732b0ea8c2f7326337c9a2c16e2d63686d&language=en&q=${searchTerm}'
    : 'https://newsdata.io/api/1/latest?apikey=pub_872732b0ea8c2f7326337c9a2c16e2d63686d&language=en'
    const res = await fetch(apiUrl)
    if(!res.ok) 
        throw new Error(`API request failed with status ${res.status}`)
    const data = await res.json()
    console.log(data);
    return data
}
// //newsAPI version
// export async function getAllArticles( category? : string) {
//     const apiUrl = category
//         ? `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=8545fe54b37e43e3bea9d5f9ba92764a`
//         : `https://newsapi.org/v2/top-headlines?country=us&apiKey=8545fe54b37e43e3bea9d5f9ba92764a`

//     const res = await fetch(apiUrl)
//     if(!res.ok) 
//         throw {
//             message: 'Failed to fetch articles.',
//             statusText: res.statusText,
//             status: res.status
//         }
//     const data = await res.json()
//     console.log('category in api.ts:', category);
//     return data
// }
        
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