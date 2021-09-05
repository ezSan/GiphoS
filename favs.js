
const consultAndClean =()=>{
    if(favoritos.length != 0){
        document.getElementsByClassName('solapaMain')[0].childNodes[3].innerHTML = '';
           
}};
    

consultAndClean();


//consumir data de favoritos y mostrar gif en pantalla// 

const printFavos =(createTools, likeBtn)=>{
    let mapFavos = favoritos.map(impFavs =>{ 
        let favBox = document.getElementById('favBox');
        favBox.classList.remove('solapaBox');
        favBox.classList.add('out');
        let boxFav = document.createElement('div');
        boxFav.classList.add('cajaGif');
        favBox.appendChild(boxFav);
        let likedGif = document.createElement('img');
        likedGif.classList.add('result');
        boxFav.appendChild(likedGif);
        likedGif.src = impFavs.source;
        imgId = impFavs.id;
        title = impFavs.title;
        author = impFavs.author;

        createTools(boxFav, likeBtn);
        titleAndAuthor(title , author , boxFav);
        
    })
    
    
}

printFavos(createTools,likeBtn);
