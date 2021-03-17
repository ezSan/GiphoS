
 let trending = () => {
    
    let traer = ()=> {
        fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=3&offset=1&rating=g`)
        .then(res => res.json())
        .then((gif)=> {
            // url Imagen
            let tdnGif = gif.data[1].images.downsized.url 
            // Accedemos al nodo html
            let trendigContent = document.getElementById(`trending-ctn`); 
            // crear elemento imagen
            let createGif = document.createElement(`img`);
            // asignar src imagen  = url.imagen
            createGif.src= tdnGif;
            //asignar hijo a nodo html
            trendigContent.appendChild(createGif);
        })
       }
   traer();
    }
           
trending();
     

    // accedo al objeto, recorro sus propiedades y accedo a una en particular
    //.then(gif=> console.log(gif.data[0].url))  ===>>> accedo a la URL del giff
    //.then(gif=> console.log(gif.data[0].images.downsized_medium.url)) 
    