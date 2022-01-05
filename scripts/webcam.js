




function webcamAccessAndStream() {
  navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true
  })
    .then(stream => {      
      video.srcObject = stream;
      video.play()
      video.classList.remove('none');
      let step2 = document.getElementById('step2');
      step2.classList.add('newStep1');

      let prevStep = document.getElementById('step1');
      prevStep.classList.remove('newStep1');

      let appearBox = document.getElementById('appearBox');
      appearBox.classList.add('none');


      recorder = new RecordRTCPromisesHandler(stream, {
        type: 'gif',
        mimeType: 'video/webm',
        recorderType: GifRecorder,
        frameRate: 1,
        quality: 10,
        width: 360,
        hidden: 240,

      });

      createRecButton()


    })
}






newColor = () => {
  //Change Color Dot
  let n1 = document.getElementById(`step1`);
  n1.classList.add('newStep1');
  let insideText = document.getElementById('insideText');
  insideText.classList.add('none');
  let appearBox = document.getElementById('appearBox');
  appearBox.classList.remove('none');
  let comenzarBtn = document.getElementById('comenzar');
  comenzarBtn.classList.add('none');
  webcamAccessAndStream();

}


function createRecButton() {
  let btn = document.createElement('input');
  btn.type = 'button';
  btn.value = 'GRABAR';
  btn.classList.add('inputWebcamAcces')
  btn.classList.add('recButton');
  btn.id = 'recButton'
  let btnCtn = document.getElementById('camAccess');
  btnCtn.appendChild(btn);
  btn.addEventListener('click', rec => {
    recorder.startRecording()
    createStopButton()
  })
}



function createStopButton() {
  let btnStop = document.createElement('input');
  let btnRec = document.getElementById('recButton');
  btnRec.classList.add('none')
  btnStop.type = 'button';
  btnStop.value = 'FINALIZAR';
  btnStop.classList.add('inputWebcamAcces');
  btnStop.classList.add('btnStopRec')
  let btnCtn = document.getElementById('camAccess');
  btnCtn.appendChild(btnStop);
  
  btnStop.addEventListener('click', stop => {
    recorder.stopRecording();
    let blobUrl =  recorder.getBlob();
    blobUrl.then(blob=>{
      let urlGiphoForUpload = URL.createObjectURL(blob)
      let fileToUpload = new FormData();
      fileToUpload.append('file' , blob, "myGif.gif");
      console.log(fileToUpload.get('file'));         
      btnStop.classList.add('none');      
      video.classList.add('none');      
      uploadGiphoButton.classList.remove('none');
      uploadGipho.classList.remove('none');      
      uploadGipho.src = urlGiphoForUpload;
      })    
  })


}




//upload gipho endpoint


const Giphy_uploadGipho =  "https://upload.giphy.com/v1/gifs";


const uploadToGiphy = async (fileGif) => { 
  try {
    let response = await fetch( Giphy_uploadGipho + apiKey, {
      method: 'POST',
      body: fileGif,
    });
    let newGif = response.json();
    console.log(newGif);
    return newGif;
  } catch(err) {
    console.log(err)
  }
}

