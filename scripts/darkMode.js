
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



/* function decideModo() {
    if (option == true) {
        console.log("Entro al if")
        option = false;
        setLightMode();
    } else {
        console.log("Entro al else")
        option = true;
        darkMode();
    }
} */


function darkModeMain() {    
    localStorage.setItem('Dark Mode', true);    
    logo.src="./assets/Logo-modo-noc.svg";
    btnSearch.src = "./assets/icon-search-mod-noc.svg";
    darkModeBtn.classList.add('none');
    lightMode.classList.remove('none');
    main.classList.add('darkModeFirst');
    trending.classList.add('darkModeTdn');
    form.classList.add('darkModeForm');
    header.classList.add('darkModeHeader');
    search.classList.add('darkModeInput');
    mainTitle.classList.add('darkModeTitle');
    trendingBarSuggestionsBox.classList.add('darkModeTitle');
    sliderTitleAndParagraph.classList.add('darkModeTitle');
    
}



function setLightMode() {

    localStorage.setItem('Dark Mode', false);
    logo.src="./assets/logo-desktop.svg";
    btnSearch.src = "./assets/icon-search.svg";
    lightMode.classList.add('none');
    darkModeBtn.classList.remove('none');

    main.classList.remove('darkModeFirst');
    trending.classList.remove('darkModeTdn');
    form.classList.remove('darkModeForm');
    header.classList.remove('darkModeHeader');
    search.classList.remove('darkModeInput');
    mainTitle.classList.remove('darkModeTitle');
    trendingBarSuggestionsBox.classList.remove('darkModeTitle');
    sliderTitleAndParagraph.classList.remove('darkModeTitle');
}



