
// Like-Downlad y mxView --- toDo crear funcionalidad de c/input//


let createTools = () => {
    let box = document.getElementById('giphobox');
    let hoverWithTools = document.createElement('div');
    hoverWithTools.id='tools'
    hoverWithTools.classList.add('hover')
    crearDiv.appendChild(hoverWithTools);
    let favAdd = document.createElement('img'); 
    favAdd.src="./assets/icon-fav.svg";   
    hoverWithTools.appendChild(favAdd);   
    let dwlAdd = document.createElement('img');
    dwlAdd.src ="./assets/icon-download.svg";
    hoverWithTools.appendChild(dwlAdd);   
    let mViewAdd = document.createElement('img'); 
    hoverWithTools.appendChild(mViewAdd);    
    mViewAdd.src="./assets/icon-max-normal.svg";  
 }

// Titulo+Autor de c/gif -- toDo consumir data de c/gif // 

 let titleAndAuthor = () => {
    let gifData = document.createElement('div');
    gifData.classList.add('gifData');
    gifData.id='gifData';
    crearDiv.appendChild(gifData);
    let title = document.createElement(h2);
    title.classList.add('gifTitle');
    gifData.appendChild(title);    
    let author = document.createElement(p);
    author.id='gifAuthor';
    gifData.appendChild(author);

}









