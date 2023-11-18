for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var text = this.innerHTML;
    switch(text){
        case "w":
            var audio = new Audio('./crash.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('./kick-bass.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('./snare.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('./tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('./tom-2.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('./tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('./tom-4.mp3');
            audio.play();
            break;
    }
    buttonAnimation(text);
});
}

document.addEventListener("keypress",function(event){
    var key = event.key;
    switch(key){
        case "w":
            var audio = new Audio('./crash.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('./kick-bass.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('./snare.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('./tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('./tom-2.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('./tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('./tom-4.mp3');
            audio.play();
            break;
    }
    buttonAnimation(key);
});

function buttonAnimation(currentkey){
    document.querySelector("."+currentkey).classList.add("pressed");

    var remove = function(){
        document.querySelector("."+currentkey).classList.remove("pressed");
    };

    setTimeout(remove,100);
}