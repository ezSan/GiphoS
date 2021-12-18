/* cuando el usuuario  */

let keyPressInSearchInput = () => {
    let searchInput = document.getElementById('search');
    searchInput.addEventListener('keyup', userKeyPress => {
        let searchImg = document.getElementById('btnSearch');
        let buttonClose = document.getElementById('closeButton')
        let inputValue = searchInput.value;
        let cajaInput = document.getElementById('cajaInput');
        let autocompleteBox = document.getElementById('autocompleteSuggestionsBox');

        let url = `https://api.giphy.com/v1/gifs/search/tags?api_key=${apiKey}&limit=5&q=${inputValue}`;
        fetch(url)
            .then(suggestions => suggestions.json())
            .then(suggestions => {

                /* initialize autocompleteBox empty, awaiting new suggestions  */

                autocompleteBox.innerHTML = ''; 
                if(autocompleteBox.classList.contains('none')){
                    autocompleteBox.classList.remove('none')
                }            


                let suggestionsData = suggestions.data;

                displaySuggestionsToDOM(suggestionsData);  
                changeIconSearch()              


            })
    })

}





keyPressInSearchInput()

let displaySuggestionsToDOM = (suggestionsData) => {

    let mapSuggestionsArray = suggestionsData.map(displaySugg => {

        let autocompleteBox = document.getElementById('autocompleteSuggestionsBox');
        autocompleteBox.classList.add('withSuggestions');
        

        let suggestionsBox = document.createElement('div');
        suggestionsBox.classList.add('suggestionBox');
        suggestionsBox.id = 'suggestionBox';
        suggestionsBox.addEventListener('click', fetchSuggestionTerm = (e) => {
            let termSuggestion = e.currentTarget.childNodes[1].innerText;
            let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=24&q=${termSuggestion}`
            fetch(url)
                .then(content => content.json())
                .then(content => {
                    displayResultsInDOM(content);
                    closeSuggestionsBox();
                    addTitle(termSuggestion);
                    
                })
        })
        let createSuggestion = document.createElement('p');
        createSuggestion.classList.add('suggestionP');
        let suggestionName = displaySugg.name;
        createSuggestion.innerText = suggestionName;
        suggestionsBox.insertAdjacentElement('afterbegin', createSuggestion);


        let lupita = document.createElement('img');
        lupita.src = 'assets/icon-search-mod-noc.svg';
        suggestionsBox.insertAdjacentElement('afterbegin', lupita)


        /*  displayCloseButton()*/


        autocompleteBox.insertAdjacentElement('afterbegin', suggestionsBox);


    })
}



/* close suggestion box */

function closeSuggestionsBox() {

    let autocompleteBox = document.getElementById('autocompleteSuggestionsBox');
    autocompleteBox.classList.add('none');
    autocompleteBox.classList.remove('withSuggestions');
    let lupa = document.getElementById('btnSearch');
    lupa.classList.remove('none');
    let closeButton = document.getElementById('closeButton');
    closeButton.classList.add('none');
    let input = document.getElementById('search');
    input.value = '';


}

function changeIconSearch(){
    let lupa = document.getElementById('btnSearch');
    let closeButton = document.getElementById('closeButton');
    let suggestionsBox= document.getElementById('autocompleteSuggestionsBox')

    if(suggestionsBox.classList.contains('withSuggestions')){
        lupa.classList.add('none')
        closeButton.classList.remove('none');
    }



}


/* delete search image & replace for close button */


