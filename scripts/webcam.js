window.addEventListener('DOMContentLoaded', webcamMode)


function webcamMode(){
  if(getMode === 'true'){
      darkModeWebcam()
  }
}

/* request permission to access the media stream */

function webcamAccessAndStream() {

  if (step1.classList.contains('darkModeNum')) {
    step1.classList.add('darkModeNumActive')
  } else { step1.classList.add('newStep') }

  slide1.classList.add('none');
  slide2.classList.remove('none');


  navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true
  })
    .then(stream => {
      video.srcObject = stream;
      video.play();
      pushOldIds()

      comenzar.classList.add('none');


      if (step1.classList.contains('darkModeNumActive')) {
        step1.classList.remove('darkModeNumActive')
      } else { step1.classList.remove('newStep') }

      if (step2.classList.contains('darkModeNum')) {
        step2.classList.add('darkModeNumActive')
      } else { step2.classList.add('newStep'); }

      slide2.classList.add('none');
      previewAndVideoBox.classList.remove('none');
      slideWithInstructions.classList.add('none');
      btnRec.classList.remove('none');

      recorder = new RecordRTCPromisesHandler(stream, {
        type: 'gif',
        mimeType: 'video/webm',
        recorderType: GifRecorder,
        frameRate: 1,
        quality: 10,
        width: 360,
        hidden: 240,

      });
    })
}
//upload gipho endpoint

const uploadToGiphy = async (fileGif) => {
  try {
    let response = await fetch(urlEndpointUpload, {
      method: 'POST',
      body: fileGif,
    });

    console.log(response.status);

    let newGif = response.json();

    newGif.then(newGif => {

      console.log(gifCreatedIds)



      let idGiphoUploaded = newGif.data.id;

      console.log(idGiphoUploaded);

      gifCreatedIds.push(idGiphoUploaded);



      localStorage.setItem('MyGifosIds', JSON.stringify(gifCreatedIds));

      overlayBoxPending.classList.add('none');
      overlayBoxOk.classList.remove('none');

      if (step3.classList.contains('darkModeNum')) {
        step3.classList.add('darkModeNumActive');
        step2.classList.remove('darkModeNumActive')
      } else {
        step3.classList.add('newStep');
        step2.classList.remove('newStep')
      }

    })

  } catch (err) {
    console.log(err)
  }
}

comenzar.addEventListener('click', webcamAccessAndStream);

uploadGiphoButton.addEventListener('click', postGipho => {
  uploadingGifOverlay.classList.remove('none');
  overlayBoxPending.classList.remove('none');
  uploadToGiphy(fileToUpload)
})

btnRec.addEventListener('click', rec => {
  recorder.startRecording()
  btnRec.classList.add('none')
  btnStop.classList.remove('none');
})

btnStop.addEventListener('click', stop => {
  recorder.stopRecording();
  let blobUrl = recorder.getBlob();
  blobUrl.then(blob => {
    let urlGiphoForUpload = URL.createObjectURL(blob)
    fileToUpload = new FormData();
    fileToUpload.append('file', blob, "myGif.gif");
    console.log(fileToUpload.get('file'));
    btnStop.classList.add('none');
    video.classList.add('none');
    uploadGiphoButton.classList.remove('none');
    uploadGipho.classList.remove('none');
    uploadGipho.src = urlGiphoForUpload;
  })
})


recordAgain.addEventListener('click', recordAgain => {
  recorder.reset();
  uploadGiphoButton.classList.add('none');
  btnRec.classList.remove('none');
  uploadGipho.classList.add('none');
  video.classList.remove('none');
  uploadingGifOverlay.classList.add('none');

})

/* darkmode */

darkModeBtn.addEventListener('click', darkModeWebcam);
lightMode.addEventListener('click', lightModeWebcam)


function darkModeWebcam() {
  localStorage.setItem('Dark Mode', true);
  logo.src = "./assets/Logo-modo-noc.svg";  
  mainTitle.classList.add('darkModeTitle');  
  lightMode.classList.remove('none');
  darkModeBtn.classList.add('none');
  cameraImg.src = "./assets/camara-modo-noc.svg";
  peliculaImg.src = './assets/pelicula-modo-noc.svg';
  container.classList.add('darkModeContainer');
  comenzar.classList.add('buttonDarkMode');
  btnRec.classList.add('buttonDarkMode');
  btnStop.classList.add('buttonDarkMode');
  uploadGiphoButton.classList.add('buttonDarkMode');
  body.classList.add('darkMode');
  purpleLine.classList.add('darkLine');
  step1.classList.add('darkModeNum');
  step2.classList.add('darkModeNum');
  step3.classList.add('darkModeNum');
  recordAgain.classList.remove('recordAgain');
  recordAgain.classList.add('recAgain');
  
}


function lightModeWebcam(){
  localStorage.setItem('Dark Mode', false);
  logo.src="./assets/logo-desktop.svg";
  mainTitle.classList.remove('darkModeTitle');
  cameraImg.src = "./assets/camara.svg";
  peliculaImg.src = './assets/pelicula.svg';
  lightMode.classList.add('none');
  darkModeBtn.classList.remove('none');
  container.classList.remove('darkModeContainer');
  comenzar.classList.remove('buttonDarkMode');
  btnRec.classList.remove('buttonDarkMode');
  btnStop.classList.remove('buttonDarkMode');
  uploadGiphoButton.classList.remove('buttonDarkMode');
  body.classList.remove('darkMode');
  purpleLine.classList.remove('darkLine');
  step1.classList.remove('darkModeNum');
  step2.classList.remove('darkModeNum');
  step3.classList.remove('darkModeNum');
  recordAgain.classList.add('recordAgain');
  recordAgain.classList.remove('recAgain');
}



