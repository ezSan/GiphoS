let traer = ()=> {
   fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=15&offset=1&rating=g`)
   .then(res => res.json())
   .then(gif=>{ 
        
        // console.log(gif.data)
        // arrayGif(gif);          
        // trendingArray(gif);   
        
        createTrendingBar(gif)
   })     
} 
       
      
traer();  

let createTrendingBar = (gif) =>{

    arrayTrendings = gif.data

    let mapTrendingArray = arrayTrendings.map( printResults =>{

      let favImg = printResults.images.downsized.url;
      let author = printResults.username;
      let title = printResults.title;
      let tdnId = printResults.id;

      let cajaGif = document.createElement('div');
          cajaGif.classList.add('cajaGif');
          cajaGif.classList.add('giphoBox')

        let hiddenOverlay = document.createElement('div');
        hiddenOverlay.classList.add('hiddenOverlay');
        cajaGif.appendChild(hiddenOverlay);

        let gif = document.createElement('img');
        gif.id = printResults.id; 
        gif.src = printResults.images.downsized.url;
        gif.title = printResults.title;       
        gif.alt = title;
        gif.classList.add('gipho');
        cajaGif.appendChild(gif);

        let tdnCtn = document.getElementById(`trending-ctn`); 
        tdnCtn.appendChild(cajaGif);

        titleAndAuthor( title, author, hiddenOverlay); 
        createTools( hiddenOverlay,likeBtn,tdnId, dwnBtn, mViewBtn);  





    })

} 
























let arrayGif = (gif) =>{
  for(var i = 0; i <= 14 ; i++){         
  // url Imagen
  let tdnGif = gif.data[i].images.downsized.url 
  //capturar id de c/gif & push to array id´s
  let tdnId =  gif.data[i].id;
  favId.push(tdnId);   
  // Accedemos al nodo html
  let tdnCtn = document.getElementById(`trending-ctn`); 
  // crear elemento imagen
  let createGif = document.createElement(`img`);
  createGif.classList.add("gipho");
  // asignar src imagen  = url.imagen
  createGif.src= tdnGif;
  /* createGif.id=`gipho${[i+1]}`; */
  createGif.id= gif.data[i].id;       
  // creo padre para c/gif 
  let crearDiv = document.createElement(`div`);
  //insert gif en div 
  crearDiv.appendChild(createGif);
  crearDiv.classList.add("giphoBox")
  crearDiv.id =`boxWithTitleToolsGif`;
  //asignar hijo a nodo html
  tdnCtn.appendChild(crearDiv);  
  //capturar title+author para enviar a cajaContenedor de gif
  let createTitle = document.createElement('h2');
 /*  crearDiv.insertAdjacentElement("afterbegin", createTitle);  */ 
  let titleGif = gif.data[i].title;
  createTitle.innerText = titleGif;
  createTitle.classList.add('hidden');   
  /* console.log(titleGif) */
  let createAuthor = document.createElement('p');
/*   createTitle.insertAdjacentElement("afterend", createAuthor); */
  let authorGif = gif.data[i].username;
  createAuthor.innerText = authorGif;
  createAuthor.classList.add('hidden');
  /* console.log(authorGif) */ 

  let hiddenOverlay = document.createElement('div');
  hiddenOverlay.classList.add('hiddenOverlay');
  crearDiv.appendChild(hiddenOverlay);

  titleAndAuthor(titleGif, authorGif, hiddenOverlay); 
  createTools( hiddenOverlay,likeBtn,tdnId, dwnBtn, mViewBtn);                  
  }               
}
