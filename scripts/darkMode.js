darkModeBtn.addEventListener('click', darkMode);





function darkLightMode() {
    if (getMode === 'true') {
        darkMode()
    } else {
        localStorage.setItem('Dark Mode', false);
    }
}

function darkMode() {
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
    darkModeBtn.addEventListener('click', setLightMode);
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
    darkModeBtn.addEventListener('click', darkMode)
}


document.addEventListener('DOMContentLoaded', darkLightMode);

