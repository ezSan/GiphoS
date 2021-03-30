let trending = () => {
    
    let traer = ()=> {
        fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=15&offset=1&rating=g`)
        .then(res => res.json())
        .then((gif)=> {            
            console.log(gif.data[1].images.downsized.url)
            for(var i = 0; i <= 14 ; i++){
            // url Imagen
            let tdnGif = gif.data[i].images.downsized.url 
            // Accedemos al nodo html
            let trendigContent = document.getElementById(`trending-ctn`); 
            // crear elemento imagen
            let createGif = document.createElement(`img`);
            createGif.classList.add("gipho")
            // asignar src imagen  = url.imagen
            createGif.src= tdnGif;
            createGif.id=`gipho${[i+1]}`
            // creo padre para c/gif 
            let crearDiv = document.createElement(`div`)
            //insert gif en div 
            crearDiv.appendChild(createGif)
            crearDiv.classList.add("giphoBox")
            //asignar hijo a nodo html
            trendigContent.appendChild(crearDiv);
            }

        }
            ) 
            } 
  traer()
           
            }
 
 trending();
     

    // accedo al objeto, recorro sus propiedades y accedo a una en particular
    //.then(gif=> console.log(gif.data[0].url))  ===>>> accedo a la URL del giff
    //.then(gif=> console.log(gif.data[0].images.downsized_medium.url)) 
    //.then(gif=> console.log(gif.data))  --->Array with gif
    


