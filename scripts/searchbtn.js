document.addEventListener("DOMContentLoaded", init);

function init() {

    document.getElementById("btnSearch").addEventListener("click", ev => {
        ev.preventDefault(); // dont refresh

        let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=24&q=`;
        let userSearch = document.getElementById('search').value;


        url = url.concat(userSearch);
        console.log('Busqueda realizada: ' + userSearch);

        fetch(url)
            .then(response => response.json())
            .then(content => {
                searchResultsContainer.innerHTML = ''
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
    });
}


//Almacenar los resultados de busqueda en un array provisorio


function mostrarResultadosEnDOM(resultadosDeBusqueda) {
    for (i = 0; i < resultadosDeBusqueda.length; i++) {
        console.log(resultadosDeBusqueda[i])

        let cajaGif = document.createElement('div');
        cajaGif.classList.add('cajaGif');

        if (i >= 12) {
            cajaGif.classList.add('hiddenOnlyBoxes');
            cajaGif.classList.add('none');
        }


        searchResultsContainer.insertAdjacentElement('afterbegin', cajaGif)


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


verMas.addEventListener('click', showMore)


function showMore() {
    let hiddenBoxes = document.getElementsByClassName('hiddenOnlyBoxes ');
    hiddenBoxes.item(0).classList.remove('none');
    hiddenBoxes.item(1).classList.remove('none');
    hiddenBoxes.item(2).classList.remove('none');
    hiddenBoxes.item(3).classList.remove('none');
    hiddenBoxes.item(4).classList.remove('none');
    hiddenBoxes.item(5).classList.remove('none');
    hiddenBoxes.item(6).classList.remove('none');
    hiddenBoxes.item(7).classList.remove('none');
    hiddenBoxes.item(8).classList.remove('none');
    hiddenBoxes.item(9).classList.remove('none');
    hiddenBoxes.item(10).classList.remove('none');
    hiddenBoxes.item(11).classList.remove('none');

    verMas.classList.add('none');
    window.scrollTo(200, 450);

}

let addTitle = (userSearch) => {
    if (document.getElementById('searchTitle')) {
        document.getElementById('searchTitle').innerText = `${userSearch}`;
    } else {
        let titleBox = document.createElement(`h2`);
        titleBox.classList.add(`searchTitle`);
        titleBox.id = `searchTitle`;
        titleBox.innerText = userSearch;

        searchResultsContainer.insertAdjacentElement("beforebegin", titleBox);
    }
}

/* función antigua, borrar luego de que todo funcione ok */

/*  function displayResultsInDOM(content) {

                    resultadosDeBusqueda = content.data;

                    let showResults = resultadosDeBusqueda.map(printResults => {

                        let favImg = printResults.images.downsized.url;
                        let author = printResults.username;
                        let title = printResults.title;
                        let imgId = printResults.id;

                        let cajaGif = document.createElement('div');
                        cajaGif.classList.add('cajaGif');
                        


                        let hiddenOverlay = document.createElement('div');
                        hiddenOverlay.classList.add('hidden');
                        cajaGif.appendChild(hiddenOverlay);
                        cajaGif.addEventListener('mouseover', removeClassHidden);
                        cajaGif.addEventListener('mouseout', addClassHidden);

                        let gif = document.createElement('img');
                        gif.id = imgId;
                        gif.src = favImg
                        gif.title = title;
                        gif.author = author;
                        gif.classList.add('result');
                        cajaGif.appendChild(gif);

                        
                        searchResultsContainer.insertAdjacentElement('afterbegin', cajaGif);

                        titleAndAuthor(title, author, hiddenOverlay);
                        createTools(hiddenOverlay, likeBtn, imgId, dwnBtn, mViewBtn);


                    })

                }

                displayResultsInDOM(content) */



/* function displayResultsInDOM(content) {

    resultadosDeBusqueda = content.data;

    let showResults = resultadosDeBusqueda.map(printResults => {

        let favImg = printResults.images.downsized.url;
        let author = printResults.username;
        let title = printResults.title;
        let imgId = printResults.id;

        let cajaGif = document.createElement('div');
        cajaGif.classList.add('cajaGif');
        

        let hiddenOverlay = document.createElement('div');
        hiddenOverlay.classList.add('hidden');
        cajaGif.appendChild(hiddenOverlay);
        cajaGif.addEventListener('mouseover', removeClassHidden);
        cajaGif.addEventListener('mouseout', addClassHidden);

        let gif = document.createElement('img'); 
        gif.id = imgId;
        gif.src = favImg
        gif.title = title
        gif.classList.add('result');
        cajaGif.appendChild(gif);

        let out = document.getElementById('out');
        out.insertAdjacentElement('afterbegin', cajaGif);

        titleAndAuthor(title, author, hiddenOverlay);
        createTools(hiddenOverlay, likeBtn, imgId, dwnBtn, mViewBtn);


    })

} */
