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
        createGif.id=`gipho${[i+1]}`;
        // creo padre para c/gif 
        let crearDiv = document.createElement(`div`);
        //insert gif en div 
        crearDiv.appendChild(createGif);
        crearDiv.classList.add("giphoBox")
        crearDiv.id =`boxWithTitleToolsGif`;
        //asignar hijo a nodo html
        tdnCtn.appendChild(crearDiv);  
        //        createTools()                 
     
        } 

        createTools();
        titleAndAuthor()
        
 }

// Like-Downlad y mxView --- toDo crear funcionalidad de c/input//


let createTools = () => {  
    
    let toolsCtn = document. querySelectorAll('#boxWithTitleToolsGif');

    for(i=0; i<toolsCtn.length; i++){
        let cajitaTools = document.createElement('div');    
        cajitaTools.classList.add('cajitaTools');
        cajitaTools.id='cajitaTools'; 
        toolsCtn[i].appendChild(cajitaTools);          
        let favAdd = document.createElement('img'); 
        favAdd.src="./assets/icon-fav.svg";      
        cajitaTools.appendChild(favAdd);    
        let dwlAdd = document.createElement('img');
        dwlAdd.src ="./assets/icon-download.svg";   
        cajitaTools.appendChild(dwlAdd);    
        let mViewAdd = document.createElement('img');       
        mViewAdd.src="./assets/icon-max-normal.svg"; 
        cajitaTools.appendChild(mViewAdd);
        
    }

       
 } 
 

// Titulo+Autor de c/gif -- toDo consumir data de c/gif // 

let titleAndAuthor = () => {
      

    let toolsCtn = document.querySelectorAll('#boxWithTitleToolsGif');
     

    for(i=0; i<toolsCtn.length; i++){

        let gifData = document.createElement('div');
        gifData.classList.add('gifData');
        gifData.id='gifData';
        toolsCtn[i].appendChild(gifData);
        let title = document.createElement('h2');
        title.classList.add('gifTitle');
        gifData.appendChild(title);
                
                    
        let author = document.createElement('p');
        author.id='gifAuthor';
        gifData.appendChild(author);

        

    }
}





/*
boxCtc.appendChild(hoverWithTools);
let boxCtc = document.getElementById('boxWithTitleToolsGif')
let hoverWithTools = document.createElement('div');
hoverWithTools.id='tools'
hoverWithTools.classList.add('hover') */

