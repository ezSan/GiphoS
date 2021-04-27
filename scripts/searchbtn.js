document.addEventListener("DOMContentLoaded", init);

function init() {
    document.getElementById("btnSearch").addEventListener("click", ev => {
        ev.preventDefault(); // dont refresh

     

        
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=24&q=`;
        let str = document.getElementById(`search`).value;
        url = url.concat(str);
        console.log(url);        
        fetch(url)
        .then(response => response.json())
        .then(content =>{
            //data, pagination, meta
            // console.log(content.data);
            // console.log(`META`, content.meta);
          
        let removeResults = ()  =>document.getElementById("out").innerHTML="";
        removeResults();
                
              
            for(i=0; i<24; i++){                
                fig = document.createElement("figura");
                let img = document.createElement("img");
                img.classList.add(`result`);                
                img.src = content.data[i].images.downsized.url;
                img.alt = content.data[i].title;
                fig.appendChild(img);                
                let out = document.querySelector("#out");
                out.insertAdjacentElement ("afterbegin", fig);                
                document.querySelector(`#search`).value = ' '       
                     
            if (i>11){                        
                        img.classList.add(`hidden`);
                        
                }   
             } 


        let boton = document.getElementById(`verMas`);
        boton.classList.remove("hidden");
                      
            })
            
        .catch(err=>{
            console.error(err);
        })
                

    });
}


// Luego de la búsqueda con éxito, input para visualizar más resultados

seeMore = () =>{
       
    let appear = document.getElementsByClassName(`result`); 
    console.log(appear);

    for ( i=0; i<appear.length; i++){
        appear[i].classList.remove('hidden');
    }

     let boton = document.getElementById(`verMas`)
     boton.classList.add("hidden");
   


}
