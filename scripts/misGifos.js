window.addEventListener('DOMContentLoaded', requestGifData);
window.addEventListener('DOMContentLoaded', misGifosMode)

function misGifosMode(){
    if(getMode === 'true'){
        darkModeMisGifos()
    }
}

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

function darkModeMisGifos(){
    localStorage.setItem('Dark Mode', true);    
    crearGifoImg.src = "./assets/CTA-crear-gifo-modo-noc.svg"; 
    logo.src="./assets/Logo-modo-noc.svg";
    darkModeBtn.classList.add('none');
    lightMode.classList.remove('none');
    body.classList.add('darkMode');
    trending.classList.add('darkModeTdn');
    /* header.classList.add('darkModeHeader'); */
    sliderTitleAndParagraph.classList.add('darkModeTitle');
    favoritosTitle.style.color = '#ffffff'; 
    solapaMain.style.background = '#37383C';
}

function lightModeMisGifos(){
    localStorage.setItem('Dark Mode', false);
    crearGifoImg.src="./assets/button-crear-gifo.svg";    
    logo.src="./assets/logo-desktop.svg";
    lightMode.classList.add('none');
    darkModeBtn.classList.remove('none');
    body.classList.remove('darkMode')
    trending.classList.remove('darkModeTdn');
    sliderTitleAndParagraph.classList.remove('darkModeTitle');
    favoritosTitle.style.color = '#572EE5';   
    solapaMain.style.background = '#ffffff';
}


darkModeBtn.addEventListener('click', darkModeMisGifos);
lightMode.addEventListener('click', lightModeMisGifos);