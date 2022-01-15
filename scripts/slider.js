


var moveLeft =  ()=> {   
     var trendingContent = document.getElementById(`trending-ctn`)
 
      var mover = trendingContent.scrollLeft-=330; 
      mover;
      

}

var moveRight =  ()=> {
    var trendingContent = document.getElementById(`trending-ctn`)

      var mover = trendingContent.scrollLeft+=330; 
      mover;     

}



/* changeImage in controls of trendings-bar  */
prev.addEventListener('mouseover', x=>prevStepImg.src = "./assets/button-slider-left-hover.svg")
prev.addEventListener('mouseout', x=> prevStepImg.src = "./assets/button-slider-left.svg")

next.addEventListener('mouseover', x=>nextStepImg.src = "./assets/Button-Slider-right-hover.svg")
next.addEventListener('mouseout', x=>nextStepImg.src = "./assets/Button-Slider-right.svg");




