
const consultAndClean =()=>{
    if(favoritos.length != 0){
        document.getElementsByClassName('solapaMain')[0].childNodes[3].innerHTML = '';
  };    
}

consultAndClean();


//consumir data de favoritos y mostrar gif en pantalla// 

const printFavos =(createTools, likeBtn)=>{
    let mapFavos = favoritos.map(impFavs =>{ 

        imgId = impFavs.id;
        title = impFavs.title;
        author = impFavs.author;

        let favBox = document.getElementById('favBox');
        favBox.classList.remove('solapaBox');
        favBox.classList.add('out');
        let boxFav = document.createElement('div');
        boxFav.classList.add('cajaGif');
        favBox.appendChild(boxFav);
        let likedGif = document.createElement('img');
        likedGif.classList.add('result');
        boxFav.appendChild(likedGif);
        let sourceFav = impFavs.source;
        likedGif.src = sourceFav;
        likedGif.title = title;
        likedGif.alt = title;
        likedGif.id = imgId;
        let hiddenOverlay = document.createElement('div');
        hiddenOverlay.classList.add('hiddenOverlay');
        likedGif.insertAdjacentElement('beforebegin', hiddenOverlay)
        


        

        titleAndAuthor(title , author , hiddenOverlay);
        createTools(hiddenOverlay, likeBtn, imgId, dwnBtn, mViewBtn);
        
    })

        
}

printFavos(createTools, likeBtn);
