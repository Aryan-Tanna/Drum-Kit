var ass = document.querySelectorAll(".drum");

for (i = 0; i < ass.length; i++) {  // Use 'let' to ensure correct scope
      // Store the text in a local variable
       ass[i].addEventListener("keydown",nah);
    
    ass[i].addEventListener("click",oknigga);
    function oknigga() {
        makesound(this.classList[0]);
        animation(this.classList[0]);
       
    }
    function nah(Evenyt) {
        makesound(Evenyt.key);
        animation(Evenyt.key);
       
    }
}
function makesound(ok){
switch (ok) {  // Use the stored text
    case 'w': audio = new Audio('./sounds/crash.mp3');  audio.play();
    break;
    case 'a': audio = new Audio('./sounds/kick-bass.mp3');  audio.play(); 
    break;
    case 's': audio = new Audio('./sounds/snare.mp3');  audio.play();
    break;
    case 'd': audio = new Audio('./sounds/tom-1.mp3'); audio.play();
    break;
    case 'j': audio = new Audio('./sounds/tom-2.mp3');  audio.play();
    break;
    case 'k': audio = new Audio('./sounds/tom-3.mp3');  audio.play();
    break;
    case 'l': audio = new Audio('./sounds/tom-3.mp3');  audio.play();
    break;``
  
}}
function animation(ok){
document.querySelector("."+ok).classList.add("pressed");
setTimeout(function (){
    document.querySelector("."+ok).classList.remove("pressed");
},700)
}