document.addEventListener("DOMContentLoaded", init);

function init() {

    document.getElementById("btnSearch").addEventListener("click", ev => {
        ev.preventDefault(); // dont refresh

        let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=36&q=`;
        let str = document.getElementById(`search`).value;

        url = url.concat(str);
        console.log(url);

        fetch(url)
            .then(response => response.json())
            .then(content => {  
               
                removeResults();
                showResults(content);
                addTitle(str);
                btnVerMas();
                createToolsResult();
                titleAndAuthorResult(content);
                intoArray(content);

                
            })

            .catch(err => {
                console.error(err);
            })
    });
}

//Capturar data del fetch, iterar los resultados e imprimir en pantalla


let showResults = (content) => {

    for (i = 0; i < 24; i++) {
        let fig = document.createElement("div");
        fig.id = 'resultCtn';
        /* fig.classList.add('resultCtn') */
        let img = document.createElement("img");
        img.classList.add(`result`);
        img.id = `gipho`;
        img.src = content.data[i].images.downsized.url;
        img.title = content.data[i].title;
        img.author = content.data[i].user;        
        fig.appendChild(img);        
        let out = document.querySelector("#out");
        out.insertAdjacentElement("afterbegin", fig);
        document.querySelector(`#search`).value = ' ';
        if (i > 11) {
            fig.classList.add('hidden');
        }
    }
}




//Almacenar los resultados de busqueda en un array provisorio

let intoArray = (content) => {
    if (resultadosDeBusqueda.length == 0) {
        resultadosDeBusqueda.push(content);
    } else {
        resultadosDeBusqueda.pop();
        resultadosDeBusqueda.push(content);
    }
    console.log(resultadosDeBusqueda[0].data);
}



//Insertar caja de herramientas en c/gif resultante de busqueda

let createToolsResult = () => {

    let resultCtn = document.querySelectorAll('#resultCtn');

    for (i = 0; i < resultCtn.length; i++) {
        let cajitaTools = document.createElement('div');
        cajitaTools.classList.add('cajitaTools');
        cajitaTools.id = 'cajitaTools';
        resultCtn[i].appendChild(cajitaTools);
        let favAdd = document.createElement('img');
        favAdd.src = "./assets/icon-fav.svg";
        cajitaTools.appendChild(favAdd);
        favAdd.classList.add('inactive');
        let url_para_favAdd = resultCtn[i].firstChild.src;        
        let title_para_favAdd = resultCtn[i].firstChild.title;        
        let author_para_favAdd = resultCtn[i].firstChild.user;        
        let dwlAdd = document.createElement('img');
        dwlAdd.src = "./assets/icon-download.svg";
        cajitaTools.appendChild(dwlAdd);
        let mViewAdd = document.createElement('img');
        mViewAdd.src = "./assets/icon-max-normal.svg";
        cajitaTools.appendChild(mViewAdd);
        favAdd.addEventListener('click', function () {
            if (favAdd.classList.contains('inactive')) {
                favAdd.classList.remove('inactive')
                favAdd.classList.add('active')
                favAdd.src = "./assets/icon-fav-active.svg";
                let obj = new Gif (url_para_favAdd, title_para_favAdd, author_para_favAdd);
                console.log(obj);
                urlFavoritos.push(obj);
                console.log(urlFavoritos);
                console.log(urlFavoritos.indexOf(obj));
            } else if (favAdd.classList.contains('active')) {
                favAdd.classList.remove('active');
                favAdd.classList.add('inactive');
                favAdd.src = "./assets/icon-fav.svg";
                              
            }
        })
    };
    
}

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






/* favAdd.addEventListener('click', function(){
    if (localStorage.length ==0){

    }else{




      if ( favAdd.classList.contains('inactive')) {
        let storageContent = localStorage.getItem('Favoritos');
        ;
        listaDeFavs.push(storageContent);
        favAdd.classList.remove('inactive')
        favAdd.classList.add('active')
        favAdd.src="./assets/icon-fav-active.svg"
        //AGREGAR AL LOCALSTORAGE
        listaDeFavs.push(url_para_favAdd)
inde
        localStorage.setItem('Favoritos', listaDeFavs);

    } else if ( favAdd.classList.contains('active')) {
        favAdd.classList.remove('active');
        favAdd.classList.add('inactive');



        //ELIMINAR  DEL LOCALSTORAGE
        console.log(lista_de_faveados)
        if (listaDeFavs.includes(url_para_favAdd)){
        listaDeFavs.splice(listaDeFavs.indexOf(url_para_favAdd),1 )
        localStorage.setItem('Favoritos', listaDeFavs);
        }
    }

}

}) */