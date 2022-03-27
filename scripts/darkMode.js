
let getMode = localStorage.getItem('Dark Mode');



darkModeBtn.addEventListener('click', decideModo);

document.addEventListener('DOMContentLoaded' , setDarkMode)


function setDarkMode(){
    if(getMode === 'true'){
        darkMode()
    }
}

let option = false;

function decideModo() {
    if (option == true) {
        console.log("Entro al if")
        option = false;
        setLightMode();
    } else {
        console.log("Entro al else")
        option = true;
        darkMode();
    }
}


function darkMode() {
    console.log("Entro a la funcion")

    localStorage.setItem('Dark Mode', true);
    main.classList.add('darkModeFirst');
    trending.classList.add('darkModeTdn');
    form.classList.add('darkModeForm');
    header.classList.add('darkModeHeader');
    search.classList.add('darkModeInput');
    mainTitle.classList.add('darkModeTitle');
    trendingBarSuggestionsBox.classList.add('darkModeTitle');
    sliderTitleAndParagraph.classList.add('darkModeTitle');

    darkModeBtn.innerHTML = 'MODO DIURNO';
}


function setLightMode() {


    localStorage.setItem('Dark Mode', false);

    main.classList.remove('darkModeFirst');
    trending.classList.remove('darkModeTdn');
    form.classList.remove('darkModeForm');
    header.classList.remove('darkModeHeader');
    search.classList.remove('darkModeInput');
    mainTitle.classList.remove('darkModeTitle');
    trendingBarSuggestionsBox.classList.remove('darkModeTitle');
    sliderTitleAndParagraph.classList.remove('darkModeTitle');


    darkModeBtn.innerHTML = 'MODO NOCTURNO';
}



