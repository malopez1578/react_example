const apiKey = 'nkhFbMGpop2B24ZV6CYYdlQyGb5sAOoK'

export default function getGifs ({keyWord='morty'}={}) {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyWord}&limit=25&offset=0&rating=g&lang=en`;
    return fetch(apiUrl).then(res => res.json()).then(response =>{
        const {data} = response
        const gifs = data.map(image => {
            const {images, title, id} = image
            const {url}= images.downsized_medium
            return {title, id, url}
        })
        return gifs
      })
}