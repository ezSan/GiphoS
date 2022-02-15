function trendingSearchBar(){
    fetch(urlEndpointTermTrending)
    .then(trendingTerms => trendingTerms.json())
    .then(trendingTerms => {

        let arrayTerms = trendingTerms.data;        
        CreateTrendingTearm(arrayTerms)
        
    }
    )
}

trendingSearchBar()



function CreateTrendingTearm(arrayTerms){

    for (i = 0  ; i <= 4 ; i++){
        let trendingSuggestion = document.createElement('p');
        trendingSuggestion.classList.add('trendingSuggestion');
        trendingSuggestionsBox.appendChild(trendingSuggestion);
        let term = arrayTerms[i];
        trendingSuggestion.innerHTML =  "-" + term + "-" ;      
       
    }

}

