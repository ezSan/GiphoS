


document.addEventListener('DOMContentLoaded', setDarkMode);




darkModeBtn.addEventListener('click', darkModeMain);
lightMode.addEventListener('click', setLightMode)

function setDarkMode(){
    if(getMode === 'true'){                
        darkModeMain()
    }else{
        console.log('el sitio está en modo claro')
    }
}
 
function darkModeMain() {    

    localStorage.setItem('Dark Mode', true);   
    crearGifoImg.src = "./assets/CTA-crear-gifo-modo-noc.svg"; 
    logo.src="./assets/Logo-modo-noc.svg";
    btnSearch.src = "./assets/icon-search-mod-noc.svg";
    darkModeBtn.classList.add('none');
    lightMode.classList.remove('none');
    body.classList.add('darkMode');
    trending.classList.add('darkModeTdn');
    form.classList.add('darkModeForm');
    /* header.classList.add('darkModeHeader'); */
    search.classList.add('darkModeInput');
    mainTitle.classList.add('darkModeTitle');
    trendingBarSuggestionsBox.classList.add('darkModeTitle');
    sliderTitleAndParagraph.classList.add('darkModeTitle');
    verMas.classList.add('buttonDarkMode'); 
    crearGifoImg.addEventListener('mouseover', x=>crearGifoImg.src = "./assets/CTA-crear-gifo-hover-modo-noc.svg");
    crearGifoImg.addEventListener('mouseout', x=> crearGifoImg.src = "./assets/CTA-crear-gifo-modo-noc.svg");
   
    
}



function setLightMode() {

    localStorage.setItem('Dark Mode', false);
    crearGifoImg.src="./assets/button-crear-gifo.svg";
    logo.src="./assets/logo-desktop.svg";
    btnSearch.src = "./assets/icon-search.svg";
    lightMode.classList.add('none');
    darkModeBtn.classList.remove('none');
    body.classList.remove('darkMode');
    main.classList.remove('darkModeFirst');
    trending.classList.remove('darkModeTdn');
    form.classList.remove('darkModeForm');  
    search.classList.remove('darkModeInput');
    mainTitle.classList.remove('darkModeTitle');
    trendingBarSuggestionsBox.classList.remove('darkModeTitle');
    sliderTitleAndParagraph.classList.remove('darkModeTitle');
    crearGifoImg.addEventListener('mouseover', x=>crearGifoImg.src = "./assets/CTA-crear-gifo-hover.svg");
    crearGifoImg.addEventListener('mouseout', x=> crearGifoImg.src = "./assets/button-crear-gifo.svg");
    
}



/* changeImage in controls of trendings-bar IN DARKMODE */

function changeCreateGifosButton(){
    if(getMode === 'true'){
        crearGifoImg.addEventListener('mouseover', x=>crearGifoImg.src = "./assets/CTA-crear-gifo-hover-modo-noc.svg");
        crearGifoImg.addEventListener('mouseout', x=> crearGifoImg.src = "./assets/CTA-crear-gifo-modo-noc.svg");
    } 
    
}