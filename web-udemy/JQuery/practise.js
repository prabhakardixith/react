
$("h1").addClass("head margin");

$("button").css("color","blue");

$("h1").text("Hi");


$("a").attr("href","https://www.google.com");
var a = $("a").attr("href");
console.log(a);

var img = $("img").attr("src");
console.log(img);


var img1 = $("img").attr("src");

//event listener

$("button").click(function(){
  console.log(typeof(this.innerHTML));
  if(this.innerHTML == 1 || this.innerHTML === "one"){  this.innerHTML = "one";
  $("h1").attr("class","h1-1");}
  else if(this.innerHTML == 2 || this.innerHTML === "two") {  this.innerHTML = "two";
  $("h1").attr("class","h1-2");}
  else if(this.innerHTML ==  3 || this.innerHTML === "three") {  this.innerHTML = "three";
  $("h1").attr("class","h1-3");}
  else if(this.innerHTML == 4 || this.innerHTML === "four") {  this.innerHTML = "four";
  $("h1").attr("class","h1-4"); }
});

function count(c){
  return c.length;
}

$("input").keypress(function(){
  var counts = setTimeout(count(this.innerHTML),51000)
  if(counts <= 5)
  {
    console.log("length should be above 5")
  }
  else{
      console.log("count "+counts);
  }

});

$(document).keypress(function(e){
  $("h1").text(e.key);
});


$("button").on("click",function(e){
  $("h1").css("font-size","3rem");
});
