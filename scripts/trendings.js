let traer = ()=> {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=15&offset=1&rating=g`)
    .then(res => res.json())
    .then((gif)=>{           
         arrayGif(gif);          
         trendingArray(gif);                      
    })     
 } 
        
       
 traer();  
 
// crear array que contenga los gif trending resultado del fetch

let trendingArray = (gif) => {
   arrayTrendings.push(gif);
   console.log('Estos son los Trendings!!')
   console.log(arrayTrendings[0].data);
}

//consumir datos del array de trendings insertar resultados en DOM

let arrayGif = (gif) =>{
   for(var i = 0; i <= 14 ; i++){         
   // url Imagen
   let tdnGif = gif.data[i].images.downsized.url 
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
   crearDiv.insertAdjacentElement("afterbegin", createTitle);  
   let titleGif = gif.data[i].title;
   createTitle.innerText = titleGif;
   createTitle.classList.add('hidden');   
   /* console.log(titleGif) */
   let createAuthor = document.createElement('p');
   createTitle.insertAdjacentElement("afterend", createAuthor);
   let authorGif = gif.data[i].username;
   createAuthor.innerText = authorGif;
   createAuthor.classList.add('hidden');
   /* console.log(authorGif) */
   titleAndAuthor(titleGif,authorGif, crearDiv); 
   createTools(crearDiv);                  
   }               
}




     

    // accedo al objeto, recorro sus propiedades y accedo a una en particular
    //.then(gif=> console.log(gif.data[0].url))  ===>>> accedo a la URL del giff
    //.then(gif=> console.log(gif.data[0].images.downsized_medium.url)) 
    //.then(gif=> console.log(gif.data))  --->Array with gif
    


