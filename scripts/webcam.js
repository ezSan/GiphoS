let streamAndRecord = () =>  { 
    navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
       height: { max: 480 }
    }
 })
 .then(function(stream) {
    video.srcObject = stream;
    video.play()
 }
 )}

 
