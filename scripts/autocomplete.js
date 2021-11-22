

let keyPressInSearchInput = () => {
    let searchInput = document.getElementById('search');
    searchInput.addEventListener('keyup', userKeyPress => {
        let inputValue = searchInput.value;
        /* console.log(inputValue); */
        let url = `https://api.giphy.com/v1/gifs/search/tags?api_key=${apiKey}&limit=5&q=${inputValue}`;
        fetch(url)
        .then(suggestions => suggestions.json())
        .then(suggestions => {
            
                document.getElementById('autocompleteSuggestionsBox').innerHTML = '';

                let suggestionsData = suggestions.data;

                displaySuggestionsToDOM(suggestionsData);

            })
    })
}


keyPressInSearchInput()

let displaySuggestionsToDOM = (suggestionsData) => {


    console.log(suggestionsData)
    let mapSuggestionsArray = suggestionsData.map(displaySugg => {

        let autocompleteBox = document.getElementById('autocompleteSuggestionsBox');

        let suggestionsBox = document.createElement('div');
        suggestionsBox.classList.add('suggestionBox');



        let createSuggestion = document.createElement('p');
        createSuggestion.classList.add('suggestionP');
        let suggestionName = displaySugg.name;
        createSuggestion.innerText = suggestionName;
        suggestionsBox.insertAdjacentElement('afterbegin', createSuggestion)

        let lupita = document.createElement('img');
        lupita.src = 'assets/icon-search-mod-noc.svg'

        suggestionsBox.insertAdjacentElement('afterbegin', lupita)
        autocompleteBox.insertAdjacentElement('afterbegin', suggestionsBox);


    })
}


