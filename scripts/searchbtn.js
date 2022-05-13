/* document.addEventListener("DOMContentLoaded", init); */



searchInput.addEventListener('keydown', e => {

    if (e.keyCode === 13) {

        let userSearch = searchInput.value


        e.preventDefault(); // dont refresh
        console.log('Busqueda realizada: ' + userSearch);
        urlEndpointSearchWithTerm = urlEndpointSearch.concat(userSearch)
        searchGifos(urlEndpointSearchWithTerm, userSearch);
        closeSuggestionsBox()
    }
});

verMas.addEventListener('click', showMoreGifs)




function searchGifos(urlEndpointSearch, userSearch) {
    fetch(urlEndpointSearch)
        .then(response => response.json())
        .then(content => {

            searchResultsContainer.innerHTML = '';
            resultadosDeBusqueda.push(content.data);
            resultadosDeBusqueda = resultadosDeBusqueda[0];
            console.log(resultadosDeBusqueda);
            mostrarResultadosEnDOM(resultadosDeBusqueda);
            addTitle(userSearch);
            resultadosDeBusqueda = [];
            verMas.classList.remove('none');

        })

        .catch(err => {
            console.error(err);
        })
}


//Almacenar los resultados de busqueda en un array provisorio


function mostrarResultadosEnDOM(resultadosDeBusqueda) {
    for (i = 0; i < resultadosDeBusqueda.length; i++) {

        let cajaGif = document.createElement('div');
        cajaGif.classList.add('cajaGif');


        if (i >= 12) {
            searchResultsContainerHidden.insertAdjacentElement('afterbegin', cajaGif)
        } else { searchResultsContainer.insertAdjacentElement('afterbegin', cajaGif); }



        title = resultadosDeBusqueda[i].title;
        author = resultadosDeBusqueda[i].username;
        imgId = resultadosDeBusqueda[i].id;


        let gif = document.createElement('img');
        gif.classList.add('result');

        gif.src = resultadosDeBusqueda[i].images.downsized.url;
        gif.id = resultadosDeBusqueda[i].id;
        gif.title = title;

        cajaGif.appendChild(gif);
        cajaGif.addEventListener('mouseover', removeClassHidden);
        cajaGif.addEventListener('mouseout', addClassHidden);

        let hiddenOverlay = document.createElement('div');
        hiddenOverlay.classList.add('hiddenOverlay');
        hiddenOverlay.classList.add('hidden');
        cajaGif.insertAdjacentElement('afterbegin', hiddenOverlay);

        titleAndAuthor(title, author, hiddenOverlay);
        createTools(hiddenOverlay, likeBtn, imgId, dwnBtn, mViewBtn);


    }
}

let addTitle = (userSearch) => {
    if (document.getElementById('searchTitle')) {
        document.getElementById('searchTitle').innerText = `${userSearch}`;
    } else {
        let titleBox = document.createElement(`h2`);
        titleBox.classList.add(`searchTitle`);

        if (getMode === 'true') {
            titleBox.classList.add('darkModeTitle');
        }


        titleBox.id = `searchTitle`;
        titleBox.innerText = userSearch;

        searchResultsContainer.insertAdjacentElement("beforebegin", titleBox);
    }
}



function showMoreGifs() {
    searchResultsContainerHidden.classList.add('gifContainer');
    searchResultsContainerHidden.classList.remove('noneMode');
    verMas.classList.add('none');
   
}