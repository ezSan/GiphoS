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
        .then(content =>{
            //data, pagination, meta
            // console.log(content.data);
            // console.log(`META`, content.meta);          
            removeResults();            
            showResults(content); 
            addTitle(str); 
            btnVerMas();  
                })  

        .catch(err=>{
            console.error(err);
        })       
    });
}




//Capturar data del fetch, iterar los resultados e imprimir en pantalla

let showResults = (content) => {

    for(i=0; i<24; i++){                
        fig = document.createElement("figura");
        let img = document.createElement("img");
        img.classList.add(`result`);                
        img.src = content.data[i].images.downsized.url;
        img.alt = content.data[i].title;
        fig.appendChild(img);                
        let out = document.querySelector("#out");
        out.insertAdjacentElement ("afterbegin", fig);                
        document.querySelector(`#search`).value = ' '   

             
    if (i>11){                        
                img.classList.add(`hidden`);                        
        } 
     }

    
}

// Si hay una búsqueda previa, eliminar los resultados de la pantalla

let removeResults = ()  => document.getElementById("out").innerHTML="";

//Capturar datos de busqueda y imprimir resultado antes de mostrar los gif buscados

let addTitle =(str)=>{             
    let ctnBox = document.getElementById(`out`);
    if ( document.getElementById('searchTitle') ) {
        document.getElementById('searchTitle').innerText = `${str}`;
    } else {

    let titleBox = document.createElement(`h2`);
    titleBox.classList.add(`searchTitle`);
    titleBox.id=`searchTitle`; 
    titleBox.innerText = str;
    ctnBox.appendChild(titleBox);   
    ctnBox.insertAdjacentElement("beforebegin", titleBox); 
    }      
}

// Luego del request con éxito, creacion del input para visualizar más resultados

let seeMore = () =>{
       
    let appear = document.getElementsByClassName(`result`); 
    console.log(appear);

    for ( i=0; i<appear.length; i++){
        appear[i].classList.remove('hidden');
    }

     let boton = document.getElementById(`verMas`)
     boton.classList.add("hidden");
   


}

//boton para ver mas resultados luego de busqueda

let btnVerMas = () =>{
    let boton = document.getElementById(`verMas`);
    boton.classList.remove("hidden"); 
}
