function webcamAccessAndStream(){
  navigator.mediaDevices.getUserMedia({
    audio:true,
    video:true}
  )
  .then(stream=>{
      let video = document.getElementById('videoBox');
      console.log(stream);
      console.log(video)

      video.srcObject = stream;

      video.play()
  })
}



newColor = () =>{
   //Change Color Dot
   let n1 = document.getElementById(`step1`)
   n1.style.backgroundColor = '#572EE5';
   n1.style.color=`white`;
   let hiddenBox = document.getElementById(`insideText`);
   hiddenBox.style.display="none"; 
   let appearBox = document.getElementById(`appearBox`);
   appearBox.classList.remove(`hiddenBox`);
   appearBox.classList.add('none')

   let comenzarBtn = document.getElementById('comenzar');
   comenzarBtn.classList.add('none');

   webcamAccessAndStream()

}
