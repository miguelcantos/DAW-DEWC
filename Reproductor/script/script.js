var video;
var i = 0;
var T=0;
var por;
var dur;
var act;
mybar=document.getElementById("myBar");
function init(){
    video = document.getElementById("video1");
    document.getElementById("video2").addEventListener("click",cambiar);
    document.getElementById("video3").addEventListener("click",cambiar);
    document.getElementById("video4").addEventListener("click",cambiar);
    setInterval(tiempo,1000);
    


}

function cambiar(){
    var aux = this.src;
    this.src = video.src;
    video.src = aux;
    mostrarPublicidad();
    if(video.paused){
        document.getElementById("play").classList.replace("pause","play");
    }
    
}

function play(){
   if(video.paused){
    video.play();
    setInterval(move,10);

    document.getElementById("play").classList.replace("play","pause");
   }else{
    video.pause();
    document.getElementById("play").classList.replace("pause", "play");
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

function cerrarPublicidad(){
    if(T > 9){
        document.getElementById("publicidad").classList.replace("publicidad","ocultar");
        document.getElementById("controles").style.visibility ="visible";
    }

}
function tiempo(){
    T++;
}

function move() {
    dur=video.duration;
    act=video.currentTime;
    por= (act*100)/dur;
    

    mybar.style.width = por + "%";
      
    
  
}

function mostrarPublicidad(){
    
    document.getElementById("publicidad").classList.replace("ocultar","publicidad");
    T=0;
    document.getElementById("controles").style.visibility = "hidden";

}
window.onload=init;