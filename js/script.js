 window.addEventListener("load", function(){
        
    var video = document.getElementById("video"),
    play = document.querySelector(".page-header__play"),   
    wrapper = document.querySelector(".page-header__wrapper");
        
    play.addEventListener("click", function(){
        if (video.paused){
            video.play();
            wrapper.style.display = "none";
        }
        }, false);
     
    video.addEventListener("click", function(){
        if (video.currentTime != 0){
            video.pause();
            wrapper.style.display = "block";
        }
    },false); 
    });





