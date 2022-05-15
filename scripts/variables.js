//ApiKey giphy
const apiKey = "2F7Zwq8U9gs2PssCkAKfR65Ned1IPdpb"; 
let getMode = localStorage.getItem('Dark Mode');


//DarkMode
const body = document.getElementById('body');
const first = document.getElementById('first');
const darkModeBtn = document.getElementById('darkMode');
const headerCtn = document.getElementById('headerCtn');
const header = document.getElementById('header');
const main = document.getElementById('main');
const trending = document.getElementById('trending');
const form = document.getElementById('form');
const search = document.getElementById('search');
const mainTitle = document.getElementById('mainTitle');
const logo = document.getElementById('logo')
const sliderTitleAndParagraph = document.getElementById('sliderTitleAndParagraph');
const liNavBar = document.getElementsByClassName('liNavBar');  
const lightMode = document.getElementById('lightMode');
const cameraImg = document.getElementById('cameraImg')
const peliculaImg = document.getElementById('peliculaImg');
const container = document.getElementById('container');
const purpleLine = document.getElementById('purpleLine');



/* Variables webcam page */
const video = document.getElementById('videoBox');
const previewAndVideoBox = document.getElementById('previewAndVideoBox');
const slideWithInstructions = document.getElementById('slideWithInstructions');
const uploadGipho = document.getElementById('uploadGipho');
const uploadGiphoButton = document.getElementById('uploadGiphoButton');
const btnStop = document.getElementById('btnStopRec');
const btnRec = document.getElementById('recButton');
const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');
const comenzar = document.getElementById('comenzar');
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const uploadingGifOverlay = document.getElementById('uploadingGifOverlay');
const overlayBoxPending = document.getElementById('overlayBoxPending');
const overlayBoxOk = document.getElementById('overlayBoxOk');
const recordAgain = document.getElementById('recordAgain');
const inputWebcamAcces = document.getElementsByClassName('inputWebcamAcces');
const buttonCamera = document.getElementsByName('webcamButton');
/* gif file ready to upload whit api endpoint */
let fileToUpload;
/* display search results in DOM */
const searchInput = document.querySelector('#search');
const btnSearch = document.getElementById("btnSearch");
const searchTitle = document.getElementById('searchTitle');
const searchResultsContainer = document.getElementById('searchResultsContainer');
const searchResultsContainerHidden = document.getElementById('searchResultsContainerHidden');
const verMas = document.getElementById('verMas');
const verMenos = document.getElementById('verMenos');

/* variables DOM slider trending buttons*/
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const prevStepImg = document.getElementById('prevStepImg');
const nextStepImg = document.getElementById('nextStepImg');
const autocompleteBox = document.getElementById('autocompleteSuggestionsBox');

/* trending Bar suggestions */
const trendingSuggestionsBox = document.getElementById('trendingSuggestionsBox');
const trendingBarSuggestionsBox = document.getElementById('trendingBarSuggestionsBox');/* endpoints giphy Api */
const urlEndpointTrending = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=15&offset=1&rating=g`;
const urlEndpointTermTrending = `https://api.giphy.com/v1/trending/searches?api_key=${apiKey}`;
const urlEndpointUpload = `https://upload.giphy.com/v1/gifs?api_key=${apiKey}`;
const urlEndpointSearch = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=24&q=`;

/* Favoritos */
const favoritosTitle = document.getElementById('favoritosTitle');
const favBox = document.getElementById('favBox');
const solapaMain = document.getElementById('solapaMain');




/* mis giphos */

const misGifosContainer = document.getElementById('misGifosContainer');
const emptyMyGifos = document.getElementById('emptyMyGifos');

// array provisorio que almacena resultados de busqueda
let resultadosDeBusqueda = [];
// Array que almacena resultados favoritos
let favoritos = [];
//array de id´s de favoritos
let favId = [];
//array para trendings 
var arrayTrendings = [];
//local storage
let storageFavoritos = JSON.parse(localStorage.getItem('Favoritos'));

//array of created gif id 





let gifosIdsStorage = JSON.parse(localStorage.getItem('MyGifosIds'))
/* let storageGifosIds = JSON.parse(gifosIdsStorage); */

let gifCreatedIds = [...gifosIdsStorage]

