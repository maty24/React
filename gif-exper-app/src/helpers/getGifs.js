export const getGifs = async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=KFLidO5WEK8Ess9IkkohND0HoYiYYqfJ&q=${category}&limit=5`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(i => ({
        id: i.id,
        title: i.title,
        url: i.images.downsized_medium.url
    }))
    return gifs
}