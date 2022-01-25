const api_key = 'qTsbrhBNc24xAUsqCmRgP8e4ykvuH17F';


export default function getGifts({keywords = 'plato'} = {}){
    const urlApi = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keywords}&limit=25&offset=0&rating=g&lang=es`;
  
    return fetch(urlApi)
    .then(res => res.json())
    .then(response => {
            const {data = []} = response
            if(Array.isArray(data)){
                const gifs =  data.map(image => {
                    const {images,title,id} = image
                    const {url} = images.fixed_height_downsampled
                    return {title,id,url}
                })
             return gifs
            }
          }
        )
      
}