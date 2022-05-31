document.addEventListener('DOMContentLoaded', pushOldFavosToArray);
document.addEventListener('DOMContentLoaded', favsMode);







const mainFavoritos = document.getElementsByClassName('solapaMain')[0].childNodes[3];


function favsMode(){
    if(getMode === 'true'){
        darkModeFavs()
    }
}



function pushOldFavosToArray(){
    if(storageFavoritos){
        favoritos = [...storageFavoritos];
        printFavos()
    }
}
//consumir data de favoritos y mostrar gif en pantalla// 

const printFavos =()=>{

    const mainFavoritos = document.getElementsByClassName('solapaMain')[0].childNodes[3];

    mainFavoritos.innerHTML= '' ;

    let mapFavos = favoritos.map(impFavs =>{ 

        imgId = impFavs.id;
        title = impFavs.title;
        author = impFavs.author;

        
        favBox.classList.remove('solapaBox');
        
        let boxFav = document.createElement('div');
        boxFav.classList.add('cajaGif');
        favBox.appendChild(boxFav);
        let likedGif = document.createElement('img');
        likedGif.classList.add('result');
        boxFav.appendChild(likedGif);
        let sourceFav = impFavs.source;
        likedGif.src = sourceFav;
        likedGif.title = title;
        likedGif.alt = title;
        likedGif.id = imgId;
        let hiddenOverlay = document.createElement('div');
        hiddenOverlay.classList.add('hidden');
        hiddenOverlay.classList.add('hiddenOverlay');
        likedGif.insertAdjacentElement('beforebegin', hiddenOverlay);
        boxFav.addEventListener('mouseover', removeClassHidden);
        boxFav.addEventListener('mouseout', addClassHidden);
              

        titleAndAuthor(title , author , hiddenOverlay);
        createTools(hiddenOverlay, likeBtn, imgId, dwnBtn, mViewBtn);
        
    })

        
}




/* DarkMode FAVORITOS    */

darkModeBtn.addEventListener('click', darkModeFavs);
lightMode.addEventListener('click', lightModeFavs)


function darkModeFavs(){    
    localStorage.setItem('Dark Mode', true);
    closeBurger.src = './assets/close-modo-noct.svg';
    burgerButton.src = './assets/burger-modo-noct.svg';
    crearGifoImg.src = "./assets/CTA-crear-gifo-modo-noc.svg"; 
    logo.src="./assets/Logo-modo-noc.svg";
    darkModeBtn.classList.add('none');    
    lightMode.classList.remove('none');
    body.classList.add('darkMode');
    trending.classList.add('darkModeTdn');
    sliderTitleAndParagraph.classList.add('darkModeTitle');
    favoritosTitle.style.color = '#ffffff';   
    solapaMain.style.background = '#37383C';
    crearGifoImg.addEventListener('mouseover', x=>crearGifoImg.src = "./assets/CTA-crear-gifo-hover-modo-noc.svg");
    crearGifoImg.addEventListener('mouseout', x=> crearGifoImg.src = "./assets/CTA-crear-gifo-modo-noc.svg");
}


function lightModeFavs(){
    localStorage.setItem('Dark Mode', false);
    closeBurger.src = './assets/close.svg';
    burgerButton.src = './assets/burger.svg';
    logo.src="./assets/logo-desktop.svg";
    crearGifoImg.src="./assets/button-crear-gifo.svg";
    lightMode.classList.add('none');
    darkModeBtn.classList.remove('none');
    body.classList.remove('darkMode');
    trending.classList.remove('darkModeTdn');
    sliderTitleAndParagraph.classList.remove('darkModeTitle');
    favoritosTitle.style.color = '#572EE5';   
    solapaMain.style.background = '#ffffff';
    crearGifoImg.addEventListener('mouseover', x=>crearGifoImg.src = "./assets/CTA-crear-gifo-hover.svg");
    crearGifoImg.addEventListener('mouseout', x=> crearGifoImg.src = "./assets/button-crear-gifo.svg");
}