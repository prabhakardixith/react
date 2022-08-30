var number = document.querySelectorAll("button").length;

for (var i = 0; i < number; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {


    var sound = new Audio('sound.wav');
    sound.play();
    var inner = this.innerHTML;
    alert(inner + " Button Got Clicked");
  });
}


document.addEventListener("keypress",
  function(e)
  {
    alert(e.key+" key pressed");
  }
);
