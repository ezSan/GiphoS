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
    logo.src="./assets/Logo-modo-noc.svg";
    darkModeBtn.classList.add('none');    
    lightMode.classList.remove('none');
    header.classList.add('darkModeHeader');
    trending.classList.add('darkModeTdn');
    sliderTitleAndParagraph.classList.add('darkModeTitle');
    favoritosTitle.style.color = '#ffffff';   
    solapaMain.style.background = '#37383C';
}


function lightModeFavs(){
    localStorage.setItem('Dark Mode', false);
    logo.src="./assets/logo-desktop.svg";
    lightMode.classList.add('none');
    darkModeBtn.classList.remove('none');
    header.classList.remove('darkModeHeader');
    trending.classList.remove('darkModeTdn');
    sliderTitleAndParagraph.classList.remove('darkModeTitle');
    favoritosTitle.style.color = '#572EE5';   
    solapaMain.style.background = '#ffffff';
}