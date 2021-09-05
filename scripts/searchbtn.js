document.addEventListener("DOMContentLoaded", init);

function init() {

    document.getElementById("btnSearch").addEventListener("click", ev => {
        ev.preventDefault(); // dont refresh

        let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=24&q=`;
        let str = document.getElementById(`search`).value;

        url = url.concat(str);
        console.log('Búsqueda realizada: ' + str);

        fetch(url)
            .then(response => response.json())
            .then(content => {

                intoArray(content);
                removeResults();
                showResults();
                addTitle(str);
                btnVerMas();

            })

            .catch(err => {
                console.error(err);
            })
    });
}

//Almacenar los resultados de busqueda en un array provisorio

let intoArray = (content) =>{
    resultadosDeBusqueda = content.data
}

//Capturar data del array de busqueda y mostrar en DOM


let showResults = () => {

    let arrayResults = resultadosDeBusqueda;

    for (i = 0; i < arrayResults.length; i++) {
        let cajaGif = document.createElement('div');
        cajaGif.classList.add('cajaGif');
        let gif = document.createElement('img');
        /* gif.id = arrayResults[i].images.downsized.url; */
        gif.classList.add('result');
        gif.id = arrayResults[i].id;
        let url = arrayResults[i].images.downsized.url;
        let title = arrayResults[i].title;
        let gifTitle = document.createElement('h2');
        gifTitle.classList.add('hidden');
        gifTitle.innerText = title;
        cajaGif.insertAdjacentElement("afterbegin", gifTitle);
        let author = arrayResults[i].username;
        let gifAuthor = document.createElement('p');
        gifAuthor.innerText = author;
        gifTitle.insertAdjacentElement("afterend", gifAuthor);
        gifAuthor.classList.add('hidden');
        gif.src = url;
        cajaGif.appendChild(gif);
        let out = document.getElementById('out');
        out.insertAdjacentElement("afterbegin", cajaGif);
        if (i > 11) {
            cajaGif.classList.add('cajaGif');
            cajaGif.classList.add('hidden');
        }

        createTools(cajaGif, likeBtn);
        titleAndAuthor(title, author, cajaGif);

    }

    document.querySelector(`#search`).value = ' ';
    
}

//Insertar caja de herramientas en cada caja que contenga gif

const likeBtn =(cajitaTools, imgId)=>{
    let favAdd = document.createElement('img'); 
    cajitaTools.appendChild(favAdd);      
    let mapIdfav = favoritos.map(ids => ids.id )
    
    if (mapIdfav.includes(imgId)){
        favAdd.src = "./assets/icon-fav-active.svg"
        favAdd.classList.add('active'); 
    }else{
        favAdd.src = "./assets/icon-fav.svg";
        favAdd.classList.add('inactive'); 
    }

    favAdd.addEventListener('click',function (){

        if (favAdd.classList.contains('inactive')) {

            let favTitle = this.parentNode.parentNode.childNodes[0].innerText;
            let favAuthor = this.parentNode.parentNode.childNodes[1].innerText;
            let favImg = this.parentNode.parentNode.childNodes[2].src;
            let imgId = this.parentNode.parentNode.childNodes[2].id;

            let goToFavAdd =
            {
                title: favTitle,
                author: favAuthor,
                source: favImg,
                id: imgId
            }

            favoritos.push(goToFavAdd);
            localStorage.setItem('Favoritos', JSON.stringify(favoritos));

        }

    });


    favAdd.addEventListener('click', function(){
        if (favAdd.classList.contains('active')){
            favAdd.src = "./assets/icon-fav.svg"; 
            favAdd.classList.remove('active');              
            favAdd.classList.add('inactive');  

            let imgId = this.parentNode.parentNode.childNodes[2].id; 
            let idLikedArray = favoritos.map( ids =>ids.id);
            let indexThisGif = idLikedArray.indexOf(imgId);
            favoritos.splice(indexThisGif,1);
            localStorage.setItem('Favoritos', JSON.stringify(favoritos));           
           
                     
        }else if(favAdd.classList.contains('inactive')){        
            favAdd.src = "./assets/icon-fav-active.svg"; 
            favAdd.classList.remove('inactive');        
            favAdd.classList.add('active');        
        }         
    
    
    })
    


}


let createTools = (cajaGif,likeBtn) => {
    let cajitaTools = document.createElement('div');
    cajitaTools.classList.add('cajitaTools');
    cajaGif.appendChild(cajitaTools);
    likeBtn(cajitaTools);
    let dwlAdd = document.createElement('img');
    dwlAdd.src = "./assets/icon-download.svg";
    cajitaTools.appendChild(dwlAdd);
    let mViewAdd = document.createElement('img');
    mViewAdd.src = "./assets/icon-max-normal.svg";
    cajitaTools.appendChild(mViewAdd);
   }


//insertar gifData en cada caja que contenga gif

let titleAndAuthor = (title, author, cajaGif) => {


    let gifData = document.createElement('div');
    gifData.classList.add('gifData');
    cajaGif.appendChild(gifData);
    let addTitle = document.createElement('p');
    addTitle.classList.add('gifTitle');
    gifData.appendChild(addTitle);
    addTitle.innerHTML = title;
    let userName = document.createElement('p');
    gifData.appendChild(userName);
    userName.innerHTML = author;
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






