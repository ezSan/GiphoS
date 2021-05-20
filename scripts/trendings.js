let trending = () => {
    
    let traer = ()=> {
        fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=15&offset=1&rating=g`)
        .then(res => res.json())
        .then((gif)=> {            
            console.log(gif.data)
            
             for(var i = 0; i <= 14 ; i++){
            // url Imagen
            let tdnGif = gif.data[i].images.downsized.url 
            // Accedemos al nodo html
            let tdnCtn = document.getElementById(`trending-ctn`); 
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
            crearDiv.id=`giphoBox${[i+1]}`
            //asignar hijo a nodo html
            tdnCtn.appendChild(crearDiv);            
            //función createTools()
            let hoverWithTools = document.createElement('div');
            hoverWithTools.id='tools'
            hoverWithTools.classList.add('hover')
            crearDiv.appendChild(hoverWithTools);
            let favAdd = document.createElement('img'); 
            favAdd.src="./assets/icon-fav.svg";
            favAdd.classList.add('hoverIcon');   
            hoverWithTools.appendChild(favAdd);   
            let dwlAdd = document.createElement('img');
            dwlAdd.src ="./assets/icon-download.svg";
            dwlAdd.classList.add('hoverIcon');
            hoverWithTools.appendChild(dwlAdd);   
            let mViewAdd = document.createElement('img'); 
            hoverWithTools.appendChild(mViewAdd); 
            mViewAdd.classList.add('hoverIcon');   
            mViewAdd.src="./assets/icon-max-normal.svg";
            //función title&author
            let gifTitle = gif.data[i].title;
            let gifAuthor = gif.data[i].username;            
            let dataHover = document.createElement('div');
            dataHover.id='dataHover';
            dataHover.classList.add('dataHover');
            crearDiv.appendChild(dataHover);
            let addTitle = document.createElement('h2');
            addTitle.innerText = gifTitle;
            addTitle.classList.add('cardTitle');            
            dataHover.appendChild(addTitle);
            let addAuthor = document.createElement('p');
            addAuthor.classList.add('cardUser')
            dataHover.appendChild(addAuthor);
            addAuthor.innerText = gifAuthor;          
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
    


