for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonValue = this.innerHTML;
    makesound(buttonValue);
    buttonHighlight(event.key);
  });

  document.addEventListener("keydown", function(event){
    makesound(event.key);
    buttonHighlight(event.key);
});

function makesound(key){
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("sounds/kick-bass.mp3")
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/snare.mp3")
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/tom-1.mp3")
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/tom-2.mp3")
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/tom-3.mp3")
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/tom-4.mp3")
      audio.play();
      break;

    default:
      console.log(event.key);


  }
}

function buttonHighlight(buttonValue){
  var element = document.querySelector("."+buttonValue).classList;
  element.add("pressed");
  setTimeout(function(){
    element.remove("pressed");
  },100);
}
}
