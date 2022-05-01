document.addEventListener('DOMContentLoaded' , trendingSearchBar)



function trendingSearchBar() {
    fetch(urlEndpointTermTrending)
        .then(trendingTerms => trendingTerms.json())
        .then(trendingTerms => {

            let arrayTerms = trendingTerms.data;
            CreateTrendingTearm(arrayTerms);
        }
        )
}





function CreateTrendingTearm(arrayTerms) {

    for (i = 0; i <= 4; i++) {
        let trendingSuggestion = document.createElement('p');
        trendingSuggestion.classList.add('trendingSuggestion');
        trendingSuggestionsBox.appendChild(trendingSuggestion);
        let term = arrayTerms[i];
        trendingSuggestion.innerHTML = "" + term + "";
    }
}



trendingSuggestionsBox.addEventListener('click', captureTermAndSearch => {

    let trendingTerm = (captureTermAndSearch.target.innerHTML);
    let urlEndpointSearchWithTerm = urlEndpointSearch.concat(trendingTerm)
    searchGifos(urlEndpointSearchWithTerm, trendingTerm)

})

console.log('ok');








