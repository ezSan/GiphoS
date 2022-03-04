
document.addEventListener('DOMContentLoaded' , pushOldIds)




function searchId ()  {

    let searchingForId = '5mS6WdjDzesMUdfN2t'
    const urlEndpointIdSearch = `https://api.giphy.com/v1/gifs/${searchingForId}?api_key=${apiKey}`
    
    fetch(urlEndpointIdSearch)
    .then(x=> x.json())
    .then(response => console.log(response))

    
}


searchId()

/* api.giphy.com/v1/gifs/{gif_id} */