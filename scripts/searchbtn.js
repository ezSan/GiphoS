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
        .then(content =>{
            removeResults();            
            showResults(content); 
            addTitle(str); 
            btnVerMas(); 
              
            titleAndAuthorResult(content);      
                    
                })  

        .catch(err=>{
            console.error(err);
        })       
    });
}




//Capturar data del fetch, iterar los resultados e imprimir en pantalla

let showResults = (content) => {
    
    for(i=0; i<24; i++){                
        let fig = document.createElement("div");
        fig.id= 'resultCtn';
        fig.classList.add('resultCtn')        
        let img = document.createElement("img");
        img.classList.add(`result`); 
        img.id = `gipho`;               
        img.src = content.data[i].images.downsized.url;
        img.alt = content.data[i].title;
        fig.appendChild(img);                
        let out = document.querySelector("#out");
        out.insertAdjacentElement ("afterbegin", fig);                
        document.querySelector(`#search`).value = ' ';
       
                 
    if (i>11){    
        fig.classList.add('hidden');                    
                
        }         
     }  
    
   
     
}

//Insertar caja de herramientas en c/gif resultante de busqueda


let createToolsResult = () => {  
    
    let resultCtn = document. querySelectorAll('#resultCtn');    

    let lista_de_faveados = [];
    
    

    for(i=0; i<resultCtn.length; i++){
        let cajitaTools = document.createElement('div');    
        cajitaTools.classList.add('cajitaTools');
        cajitaTools.id='cajitaTools'; 
        resultCtn[i].appendChild(cajitaTools);          
        let favAdd = document.createElement('img'); 
        favAdd.src="./assets/icon-fav.svg";  
        cajitaTools.appendChild(favAdd);       
        favAdd.classList.add('inactive');
        let url_para_favAdd = resultCtn[i].firstChild.src;
        favAdd.id = url_para_favAdd;
        favAdd.addEventListener('click', function(){
            if ( favAdd.classList.contains('inactive')) { 
                favAdd.classList.remove('inactive')
                favAdd.classList.add('active')
                favAdd.src="./assets/icon-fav-active.svg"
                // Agregar el item a LocalStorage                
                lista_de_faveados.push(url_para_favAdd);
                localStorage.setItem('Lista de GIF', lista_de_faveados);
            } else if (favAdd.classList.contains('active')) {
                favAdd.classList.remove('active');
                favAdd.classList.add('inactive');
                favAdd.src="./assets/icon-fav.svg";
                //Eliminar el gif de LocalStorage
                if (lista_de_faveados.includes(url_para_favAdd)){
                    lista_de_faveados.splice(lista_de_faveados.indexOf(url_para_favAdd),1);
                    localStorage.setItem('Lista de GIF',lista_de_faveados);
                }}
            })     
        let dwlAdd = document.createElement('img');
        dwlAdd.src ="./assets/icon-download.svg";   
        cajitaTools.appendChild(dwlAdd);    
        let mViewAdd = document.createElement('img');       
        mViewAdd.src="./assets/icon-max-normal.svg"; 
        cajitaTools.appendChild(mViewAdd);
        }
      
 } 

 //insertar gifData en cada caja 

 let titleAndAuthorResult = (content) => {
      

    let dataCtn = document.querySelectorAll('#resultCtn');
    
    

    for(i=0; i<dataCtn.length; i++){

        let gifData = document.createElement('div');
        gifData.classList.add('gifData');
        gifData.id='gifData';
        dataCtn[i].appendChild(gifData);
        let title = document.createElement('h2');
        title.classList.add('gifTitle');
        title.id='gifTitle';
        let titleCtn = content.data[i].title;
        gifData.appendChild(title);
        title.innerHTML = titleCtn;                  
        let author = document.createElement('p');
        author.id='gifAuthor';
        gifData.appendChild(author);
        let userName = content.data[i].username;
        author.innerHTML = userName;
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
       
    let appear = document.querySelectorAll(`#resultCtn`); 
    console.log(appear);

    for ( i=0; i<appear.length; i++){
        appear[i].classList.remove('hidden');
       
    }

     /* let boton = document.getElementById(`verMas`)
     boton.classList.add("hidden"); */
   


}

//boton para ver mas resultados luego de busqueda

let btnVerMas = () =>{
    let boton = document.getElementById(`verMas`);
    boton.classList.remove("hidden"); 
}






   
   