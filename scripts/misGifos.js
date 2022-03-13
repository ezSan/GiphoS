window.addEventListener('DOMContentLoaded', requestGifData)

function requestGifData() {

    if(gifosIdsStorage){
        let arrayGifMap = gifCreatedIds.map(gifData => {
            searchId(gifData);
            emptyMyGifos.innerHTML = ' ';
        })
    }else{
        console.log('No has creado ningún Gifo :( ')
    }

}










function searchId(gifId) {

    const urlEndpointIdSearch = `https://api.giphy.com/v1/gifs/${gifId}?api_key=${apiKey}`

    fetch(urlEndpointIdSearch)
        .then(x => x.json())
        .then(response => {
            console.log(response.data)
            let gifoUrl = response.data.images.downsized.url;
            showCreatedGifos(gifoUrl);
        })

}







function showCreatedGifos(gifoUrl) {

    let cajaGif = document.createElement('div');

    cajaGif.classList.add('boxMyGifo');
    misGifosContainer.insertAdjacentElement('afterbegin', cajaGif)

    let gipho = document.createElement('img');
    gipho.classList.add('result');
    gipho.src = gifoUrl;
    cajaGif.appendChild(gipho);





}





/* function misGifosEmpty(){
    if(gifosIdsStorage){       
        emptyMyGifos.classList.add('none');
        emptyMyGifos.classList.remove('withoutGifs');
        requestGifData()        
    } else{
        console.log('Creá un Gif así aparece en éste solapa :)')
    }
} */

/* push ids in local storage */
