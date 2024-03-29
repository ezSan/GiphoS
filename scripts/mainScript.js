document.addEventListener('DOMContentLoaded' , lsConstult);

/* Consultar en el LocalStorage si ya has creado Gifos */

function lsConstult() {
    itsEmpty
      ? getDataAndPushInArray()
      : console.log('Aún no has creado tu primer Gifo!')
  }
  
  function getDataAndPushInArray() {    
    let oldIds = JSON.parse(localStorage.getItem('myGifos'))
    newArray = [...oldIds];
    
    console.log('Tus Gifos creados en "Mis Gifos" ')
    console.log(newArray)
  }


const likeBtn = (cajitaTools, imgId) => {

    let favAdd = document.createElement('img');

    cajitaTools.appendChild(favAdd);
    let mapIdfav = favoritos.map(ids => ids.id);


    if (mapIdfav.includes(imgId)) {
        favAdd.src = "./assets/icon-fav-active.svg"
        favAdd.classList.add('active');
    } else {
        favAdd.src = "./assets/icon-fav.svg";
        favAdd.classList.add('inactive');
    }

    favAdd.addEventListener('click', function () {

        if (favAdd.classList.contains('inactive')) {


            let favAuthor = this.parentNode.parentElement.children[1].childNodes[1].innerText;
            let favTitle = this.parentNode.parentElement.children[1].childNodes[0].innerText;
            let favImg = this.parentNode.parentNode.parentNode.childNodes[1].src;
            let imgId = this.parentNode.parentNode.parentNode.childNodes[1].id;



            let goToFavAdd = {
                title: favTitle,
                author: favAuthor,
                source: favImg,
                id: imgId
            }

            console.log(goToFavAdd)

            favoritos.push(goToFavAdd);
            localStorage.setItem('Favoritos', JSON.stringify(favoritos));
        }

    });


    favAdd.addEventListener('click', function () {
        if (favAdd.classList.contains('active')) {
            favAdd.src = "./assets/icon-fav.svg";
            favAdd.classList.remove('active');
            favAdd.classList.add('inactive');

            let imgId = this.parentNode.parentNode.parentNode.childNodes[1].id;

            let idLikedArray = favoritos.map(ids => ids.id);

            let indexThisGif = idLikedArray.indexOf(imgId);
            favoritos.splice(indexThisGif, 1);
            localStorage.setItem('Favoritos', JSON.stringify(favoritos));


        } else if (favAdd.classList.contains('inactive')) {
            favAdd.src = "./assets/icon-fav-active.svg";
            favAdd.classList.remove('inactive');
            favAdd.classList.add('active');
        }
    })
}

let dwnBtn = (cajitaTools,) => {
    let dwlAdd = document.createElement('img');
    dwlAdd.src = "./assets/icon-download.svg";
    cajitaTools.appendChild(dwlAdd);

    dwlAdd.addEventListener('click', function () {
        let linkForDownload = this.parentNode.parentNode.parentNode.childNodes[1].src;
        fetch(linkForDownload)
            .then(dwn => dwn.blob())
            .then(dwn => {
                const url = window.URL.createObjectURL(dwn);
                const link = document.createElement('a');
                link.style.display = 'none';
                link.href = url;
                let nameDwn = 'DownloadedGipho'
                link.download = nameDwn;
                link.click();
                cajitaTools.appendChild(link);
                window.URL.revokeObjectURL(url);
            })

            .catch('todomal')


    }
    );
}

let mViewBtn = (cajitaTools,) => {
    let mViewAdd = document.createElement('img');
    mViewAdd.src = "./assets/icon-max-normal.svg";
    cajitaTools.appendChild(mViewAdd);

    mViewAdd.addEventListener('click', function triggerModal() {

        var img = mViewAdd.parentElement.parentElement.parentElement.childNodes[1].src;
        var imgId = mViewAdd.parentElement.parentElement.parentElement.childNodes[1].id;



        //create box for display image in fullview
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.id = 'myModal';
        cajitaTools.appendChild(modal);
        //create span for close modal image
        let closeSpan = document.createElement('span');
        closeSpan.classList.add('close');
        closeSpan.innerHTML = '&times;'
        modal.appendChild(closeSpan);
        //when the user clicks on (x), close the modal
        closeSpan.addEventListener('click', x => modal.style.display = "none");
        //modal content (the image)
        let modalImage = document.createElement('img');
        modalImage.classList.add('modal-content');
        modalImage.id = imgId;
        modal.appendChild(modalImage);
        // Get the image and insert it inside the modal - use its "alt" text as a caption        
        modal.style.display = "block";
        modalImage.src = img;
        //div for data
        let dataMaxView = document.createElement('div');
        dataMaxView.classList.add('caption')
        dataMaxView.id = 'caption';
        modal.appendChild(dataMaxView);
        let modalTitle = document.createElement('h2');
        let titleForModal = mViewAdd.parentElement.parentElement.childNodes[0].childNodes[0].innerHTML;
        modalTitle.innerText = titleForModal;
        dataMaxView.appendChild(modalTitle);
        let modalAuthor = document.createElement('p');
        let authorForModal = mViewAdd.parentElement.parentElement.childNodes[0].childNodes[1].innerHTML;
        modalAuthor.innerText = authorForModal;
        modalTitle.insertAdjacentElement('beforebegin', modalAuthor);
        //tools for modal-image in maxView

        let modalTools = () => {

            let toolsBox = document.createElement('div');
            toolsBox.classList.add('toolsBox');
            dataMaxView.appendChild(toolsBox);
            let favAdd = document.createElement('img');
            toolsBox.appendChild(favAdd);
            let mapIdFav = favoritos.map(ids => ids.id);

            if (mapIdFav.includes(imgId)) {
                favAdd.src = "./assets/icon-fav-active.svg"
                favAdd.classList.add('active');
            } else {
                favAdd.src = "./assets/icon-fav.svg";
                favAdd.classList.add('inactive');
            }

            favAdd.addEventListener('click', function () {
                if (favAdd.classList.contains('active')) {
                    favAdd.classList.remove('active');
                    favAdd.classList.add('inactive');
                    favAdd.src = "./assets/icon-fav.svg ";

                    let imgId = this.parentNode.parentNode.parentNode.childNodes[1].id;
                    let idLikedArray = favoritos.map(ids => ids.id)

                    let indexThisGif = idLikedArray.indexOf(imgId);
                    favoritos.splice(indexThisGif, 1);
                    localStorage.setItem('Favoritos', JSON.stringify(favoritos));

                } else {
                    favAdd.src = "./assets/icon-fav-active.svg";
                    favAdd.classList.remove('inactive');
                    favAdd.classList.add('active');
                }

                favAdd.addEventListener('click', function () {
                    if (favAdd.classList.contains('inactive')) {

                        let favTitle = this.parentNode.parentNode.childNodes[0].innerHTML;
                        let favAuthor = this.parentNode.parentNode.childNodes[1].innerHTML;
                        let favImg = this.parentNode.parentNode.parentNode.childNodes[1].src;
                        let imgId = this.parentNode.parentNode.parentNode.childNodes[1].id;

                        let goToFavAdd = {
                            title: favTitle,
                            author: favAuthor,
                            source: favImg,
                            id: imgId
                        }

                        favoritos.push(goToFavAdd);
                        localStorage.setItem('Favoritos', JSON.stringify(favoritos));


                    }



                })


            })
        }

        modalTools();

    })
}

//Insertar caja de herramientas en cada caja que contenga gif

let createTools = (hiddenOverlay, likeBtn, imgId, dwnBtn, mViewBtn) => {
    
    let cajitaTools = document.createElement('div');
    cajitaTools.classList.add('cajitaTools');


    hiddenOverlay.insertAdjacentElement('afterbegin', cajitaTools);

    likeBtn(cajitaTools, imgId);
    dwnBtn(cajitaTools);
    mViewBtn(cajitaTools);
}

//insertar gifData en cada caja que contenga gif

let titleAndAuthor = (title, author, hiddenOverlay) => {
    let gifData = document.createElement('div');
    gifData.classList.add('gifData');
    /* gifData.classList.add('hiddenOrNot'); */
    hiddenOverlay.insertAdjacentElement('beforeend', gifData);


    let addTitle = document.createElement('h2');
    addTitle.classList.add('gifTitle');
    /* addTitle.classList.add('titleAndAuthorElements'); */
    addTitle.innerHTML = title;
    gifData.appendChild(addTitle);

    let userName = document.createElement('p');
    userName.classList.add('gifAuthor');
    gifData.appendChild(userName);
    userName.innerHTML = author;
    /* userName.classList.add('titleAndAuthorElements');
 */
}

// remove & add hidden class in eventListener

function removeClassHidden(e) {
    let thisElement = e.currentTarget
    thisElement.childNodes[0].classList.remove('hidden')
}
function addClassHidden(e) {
    let thisElement = e.currentTarget
    thisElement.childNodes[0].classList.add('hidden')
}


crearGifoImg.addEventListener('mouseover', x=>crearGifoImg.src = "./assets/CTA-crear-gifo-hover.svg");
crearGifoImg.addEventListener('mouseout', x=> crearGifoImg.src = "./assets/button-crear-gifo.svg");



















