document.addEventListener("DOMContentLoaded", init);

function init(userSearch) {

    document.getElementById("btnSearch").addEventListener("click"  ,ev => {
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

                console.log(resultadosDeBusqueda.length)
                

                 function mostrarResultadosEnDOM(resultadosDeBusqueda){
                    for(i = 0 ; i< resultadosDeBusqueda.length; i++){
                        console.log(resultadosDeBusqueda[i])

                        let cajaGif = document.createElement('div');
                        cajaGif.classList.add('cajaGif');
                                                
                        searchResultsContainer.appendChild(cajaGif);

                        let gif = document.createElement('img');
                        gif.id = 'imgId';
                        gif.src = resultadosDeBusqueda[i].images.downsized.url;
                        cajaGif.appendChild(gif)

                        if(i>=12){                            
                            gif.classList.add('none')
                        }
                       
                        
                    }
                } 

                mostrarResultadosEnDOM(resultadosDeBusqueda)


              

                

                

                              
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
        cajaGif.classList.add('boxWithSearch');

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

let addTitle = (str) => {
    let ctnBox = document.getElementById(`out`);

    if (document.getElementById('searchTitle')) {
        document.getElementById('searchTitle').innerText = `${str}`;
    } else {
        let titleBox = document.createElement(`h2`);
        titleBox.classList.add(`searchTitle`);
        titleBox.id = `searchTitle`;
        titleBox.innerText = str;
        ctnBox.appendChild(titleBox);
        ctnBox.insertAdjacentElement("beforebegin", titleBox);
    }
}
//boton para ver mas resultados luego de busqueda

let btnVerMas = () => {
    let boton = document.getElementById(`verMas`);
    boton.classList.remove("hidden");
}


function addHiddenClass() {
    let boxes = document.getElementsByClassName('boxWithSearch');
    console.log(boxes)

}