//ApiKey giphy
const apiKey = "2F7Zwq8U9gs2PssCkAKfR65Ned1IPdpb";
// array provisorio que almacena resultados de busqueda
let resultadosDeBusqueda = [];
// Array que almacena resultados favoritos
let favoritos = [];
//array de id´s de favoritos
let favId = [];
//array para trendings 
var arrayTrendings = [];
//local storage
/* let createKey = localStorage.setItem('Favoritos', JSON.stringify(favoritos)); */
let storageFavoritos = JSON.parse(localStorage.getItem('Favoritos'));

//Comprobar LocalStorage // Pushear favs anteriores
let comprobeLs = () =>{
    if(localStorage.length == 0){
        localStorage.setItem('Favoritos',JSON.stringify(favoritos));
        console.log('Se ha dado inicio al LocalStorage, key: "Favoritos" ')
    }else{
        let pushearFavAnteriores = storageFavoritos.map(oldFavs=>{
            favoritos.push(oldFavs);            
        })
    }
}

comprobeLs()

//array de id´s de favoritos//
let favMapId = [];

/* comprobeAndPushLocalStorage()  */



