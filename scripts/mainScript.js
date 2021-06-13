//ApiKey giphy
const apiKey = "2F7Zwq8U9gs2PssCkAKfR65Ned1IPdpb";

// Autocomplete endpoint
let userSearchinput = document.getElementById(`search`);



// array provisorio que almacena resultados de busqueda

let resultadosDeBusqueda = [];

// Array que almacena resultados favoritos

let urlFavoritos = [];


//objeto gif 

function Gif (url, title, author) {
    this.url = url ; 
    this.title = title; 
    this.author = author; 
}