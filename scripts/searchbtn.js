document.addEventListener("DOMContentLoaded", init);

function init() {

    document.getElementById("btnSearch").addEventListener("click", ev => {
        ev.preventDefault(); // dont refresh

        let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=24&q=`;
        let str = document.getElementById(`search`).value;

        url = url.concat(str);
        console.log(url);

        fetch(url)
            .then(response => response.json())
            .then(content => {  

                intoArray(content);                
                removeResults();
                showResults();
                addTitle(str);
                btnVerMas();   
                toolsBox()             
                
                /* titleAndAuthorResult(content);  */
                

                
            })

            .catch(err => {
                console.error(err);
            })
    });
}

//Almacenar los resultados de busqueda en un array provisorio

let intoArray = (content) => {
    if (resultadosDeBusqueda.length == 0) {
        resultadosDeBusqueda.push(content.data);
    } else {
        resultadosDeBusqueda.pop();
        resultadosDeBusqueda.push(content.data);
    }
    console.log(resultadosDeBusqueda[0]);
}


//Capturar data del fetch, iterar los resultados e imprimir en pantalla


let showResults = () => {

    let arrayResults = resultadosDeBusqueda[0];

    for (i = 0;  i < arrayResults.length; i++){

        let cajaGif = document.createElement('div');
        cajaGif.classList.add('cajaGif');
        let gif = document.createElement('img');
        gif.classList.add('result');
        let url = arrayResults[i].images.downsized.url;
        let title = arrayResults[i].title;        
        let author = arrayResults[i].username;        
        gif.src = url;
        cajaGif.appendChild(gif);
        let out = document.getElementById('out');
        out.insertAdjacentElement("afterbegin", cajaGif);
        if (i > 11) {
            cajaGif.classList.add('cajaGif');
            cajaGif.classList.add('hidden');
        document.querySelector(`#search`).value = ' '
        
        } 
    }
   
}

//Insertar caja de herramientas en c/gif resultante de busqueda


let toolsBox = () => {
    let box = document.querySelectorAll('#cajaGif');
    box.id = 'napoPete';
}

// let createToolsResult = () => {        
    
//     for (i = 0; i < resultadosDeBusqueda[0].length; i++) {

//             let cajitaTools = document.createElement('div');
//             cajitaTools.classList.add('cajitaTools');  
//             let cajaDeGif = document.getElementsByClassName('cajaGif');    
//             cajaDeGif.appendChild(cajitaTools); 
//             let favAdd = document.createElement('img');
//             favAdd.src = "./assets/icon-fav.svg";
//             cajitaTools.appendChild(favAdd);
//             favAdd.classList.add('inactive');
//             let url_para_favAdd = resultadosDeBusqueda[0][i].firstChild.src;        
//             let title_para_favAdd = resultadosDeBusqueda[0][i].firstChild.title;        
//             let author_para_favAdd = resultadosDeBusqueda[0][i].firstChild.user;        
//             let dwlAdd = document.createElement('img');
//             dwlAdd.src = "./assets/icon-download.svg";
//             cajitaTools.appendChild(dwlAdd);
//             let mViewAdd = document.createElement('img');
//             mViewAdd.src = "./assets/icon-max-normal.svg";
//             cajitaTools.appendChild(mViewAdd);
//             favAdd.addEventListener('click', function () {
//                 if (favAdd.classList.contains('inactive')) {
//                     favAdd.classList.remove('inactive')
//                     favAdd.classList.add('active')
//                     favAdd.src = "./assets/icon-fav-active.svg";
//                     let dataFaveado = [url_para_favAdd , title_para_favAdd , author_para_favAdd];
//                     urlFavoritos.push(dataFaveado);
//                     console.log(urlFavoritos);
//                 } else if (favAdd.classList.contains('active')) {
//                     favAdd.classList.remove('active');
//                     favAdd.classList.add('inactive');
//                     favAdd.src = "./assets/icon-fav.svg";
                                  
//                 }
//             })
//         };
        
//     }


//insertar gifData en cada caja 

let titleAndAuthorResult = (content) => {


    let dataCtn = document.querySelectorAll('#resultCtn');



    for (i = 0; i < dataCtn.length; i++) {

        let gifData = document.createElement('div');
        gifData.classList.add('gifData');
        gifData.id = 'gifData';
        dataCtn[i].appendChild(gifData);
        let title = document.createElement('h2');
        title.classList.add('gifTitle');
        title.id = 'gifTitle';
        let titleCtn = content.data[i].title;
        gifData.appendChild(title);
        title.innerHTML = titleCtn;
        let author = document.createElement('p');
        author.id = 'gifAuthor';
        gifData.appendChild(author);
        let userName = content.data[i].username;
        author.innerHTML = userName;
    }
}

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

// Luego del request con éxito, creacion del input para visualizar más resultados

let seeMore = () => {

    let appear = document.querySelectorAll(`#resultCtn`);
    console.log(appear);

    for (i = 0; i < appear.length; i++) {
        appear[i].classList.remove('hidden');

    }

    /* let boton = document.getElementById(`verMas`)
    boton.classList.add("hidden"); */



}

//boton para ver mas resultados luego de busqueda

let btnVerMas = () => {
    let boton = document.getElementById(`verMas`);
    boton.classList.remove("hidden");
}






