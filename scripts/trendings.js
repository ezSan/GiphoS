
    
    let traer = ()=> {
        fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=15&offset=1&rating=g`)
        .then(res => res.json())
        .then((gif)=>{
             console.log(gif.data[1].images.downsized.url);
            
             arrayGif(gif);   
             
             
               
                                    
        })        
     } 
            
           
     traer();       
     

    // accedo al objeto, recorro sus propiedades y accedo a una en particular
    //.then(gif=> console.log(gif.data[0].url))  ===>>> accedo a la URL del giff
    //.then(gif=> console.log(gif.data[0].images.downsized_medium.url)) 
    //.then(gif=> console.log(gif.data))  --->Array with gif
    


