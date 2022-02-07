document.addEventListener("DOMContentLoaded", init);

function init(userSearch) {

    document.getElementById("btnSearch").addEventListener("click", ev => {
        ev.preventDefault(); // dont refresh

        let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=24&q=`;
        let userSearch = document.getElementById('search').value;


        url = url.concat(userSearch);
        console.log('Busqueda realizada: ' + userSearch);

        fetch(url)
            .then(response => response.json())
            .then(content => {
                resultadosDeBusqueda.push(content.data)
                resultadosDeBusqueda = resultadosDeBusqueda[0];
                console.log(resultadosDeBusqueda);

                console.log(resultadosDeBusqueda.length);


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


                function mostrarResultadosEnDOM(resultadosDeBusqueda) {
                    for (i = 0; i < resultadosDeBusqueda.length; i++) {
                        console.log(resultadosDeBusqueda[i])

                        let cajaGif = document.createElement('div');
                        cajaGif.classList.add('cajaGif');
                        if (i >= 12) {
                            cajaGif.style.display = 'none'
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
                        cajaGif.insertAdjacentElement('afterbegin', hiddenOverlay)




                        titleAndAuthor(title, author, hiddenOverlay);
                        createTools(hiddenOverlay, likeBtn, imgId, dwnBtn, mViewBtn);

                    }
                }

                mostrarResultadosEnDOM(resultadosDeBusqueda);
                addTitle(userSearch);









            })

            .catch(err => {
                console.error(err);
            })
    });
}


//Almacenar los resultados de busqueda en un array provisorio










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

// Si hay una búsqueda previa, eliminar los resultados de la pantalla

let removeResults = () => document.getElementById("out").innerHTML = "";

//Capturar datos de busqueda y imprimir resultado antes de mostrar los gif buscados

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
//boton para ver mas resultados luego de busqueda

let btnVerMas = () => {
    let boton = document.getElementById(`verMas`);
    boton.classList.remove("hidden");
}

