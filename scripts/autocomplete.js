// userSearchinput.addEventListener(`input`, () =>{
//     if(userSearchinput.value !== ``){
//         displayAutocompleSuggestions
//     }
// })


let autocomplete = () =>{

    let url =`https://api.giphy.com/v1/gifs/search/tags?api_key=${apiKey}&q=`;
    let str = document.getElementById(`search`).value;

    url = url.concat(str);

    
    fetch(url)
        .then(response => response.json()) 
        .then(content => {
                         
        })   
    } 

    
autocomplete();