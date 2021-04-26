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
            console.log(content.data);
            console.log(`META`, content.meta);
          

           for(i=0; i<24; i++){
                         
                let fig = document.createElement("figura");
                let img = document.createElement("img")
                img.classList.add(`search-${i}`);                
                img.classList.add(`result`);                
                img.src = content.data[i].images.downsized.url;
                img.alt = content.data[i].title;               
                fig.appendChild(img);                
                let out = document.querySelector("#out");
                out.insertAdjacentElement ("afterbegin", fig);
                document.querySelector(`#search`).value = ' '                  
                if (i>11){
                        //acá seguir //
                        img.classList.add(`hidden`);
                        let seeMore = document.createElement(`input`);
                        seeMore.classList.add(`seeMore`);
                        let buttonBox = document.querySelector(`#first`);
                        buttonBox.appendChild(seeMore)
                        ////



                        
                }
                  
            } 
           
            
     }
           
            
        )

        .catch(err=>{
            console.error(err);
        })
    });
}
