var video;

function init(){
    video = document.getElementById("video1");
    document.getElementById("video2").addEventListener("click",cambiar);
    document.getElementById("video3").addEventListener("click",cambiar);
    document.getElementById("video4").addEventListener("click",cambiar);
}

function cambiar(){
    var aux = this.src;
    this.src = video.src;
    video.src = aux;
    document.getElementById("pause").id="play";
}
function play(){
   if(video.paused){
    video.play();
    document.getElementById("play").id="pause";
   }else{
    video.pause();
    document.getElementById("pause").id="play";
   }

}

function mute(){
    if(video.volume!=0){
        video.volume=0;
        console.log("mute");
    }

}

function volumenM(){
    if(video.volume != 1){
    video.volume += 0.2;
    console.log("+volumen");
    }

}

function volumenm(){
    if(video.volume > 0.1){
    video.volume -= 0.2;
    console.log("-volumen");
    }
    
}

function rebobinar(){
    video.currentTime-=10;
}

function reiniciar(){
    video.currentTime=0;
    video.play();

}

function adelantar(){
    video.currentTime+=10;
}

window.onload=init;