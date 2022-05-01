document.addEventListener("DOMContentLoaded", showTrendingBarInDom);


function showTrendingBarInDom() {
  fetch(urlEndpointTrending)
    .then(res => res.json())
    .then(gif => {
      createTrendingBar(gif);
    });
}


let createTrendingBar = (gif) => {

  arrayTrendings = gif.data

  let mapTrendingArray = arrayTrendings.map(printResults => {

    let favImg = printResults.images.downsized.url;
    let author = printResults.username;
    let title = printResults.title;
    let tdnId = printResults.id;

    let cajaGif = document.createElement('div');
    cajaGif.classList.add('cajaGif');
    cajaGif.classList.add('giphoBox');

    cajaGif.addEventListener('mouseover', removeClassHidden);
    cajaGif.addEventListener('mouseout', addClassHidden);

    let hiddenOverlay = document.createElement('div');
    hiddenOverlay.classList.add('hidden')
    hiddenOverlay.classList.add('hiddenOverlay');
    hiddenOverlay.id = 'hiddenOverlay';
    cajaGif.appendChild(hiddenOverlay);

    let gif = document.createElement('img');
    gif.id = tdnId
    gif.src = favImg;
    gif.title = title;
    gif.alt = title;
    gif.classList.add('gipho');
    cajaGif.appendChild(gif);

    let tdnCtn = document.getElementById(`trending-ctn`);
    tdnCtn.appendChild(cajaGif);

    titleAndAuthor(title, author, hiddenOverlay);
    createTools(hiddenOverlay, likeBtn, tdnId, dwnBtn, mViewBtn);
  })

}

