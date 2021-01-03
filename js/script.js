// time show
function timeshow() {
	document.getElementById('time-show-btn').innerHTML=Date()
	
}

// js animation
var x = document.getElementById("js-animation");
// Start the animation with JavaScript
function jsanimation() {
  x.style.WebkitAnimation = "mymove 4s 2"; // Code for Chrome, Safari and Opera
  x.style.animation = "mymove 4s 2";     // Standard syntax
}

// Code for Chrome, Safari and Opera
x.addEventListener("webkitAnimationStart", myStartFunction);
x.addEventListener("webkitAnimationIteration", myRepeatFunction);
x.addEventListener("webkitAnimationEnd", myEndFunction);

// Standard syntax
x.addEventListener("animationstart", myStartFunction);
x.addEventListener("animationiteration", myRepeatFunction);
x.addEventListener("animationend", myEndFunction);

function myStartFunction() {
  this.innerHTML = "animationstart event occured - The animation has started";
  this.style.backgroundColor = "pink";
}

function myRepeatFunction() {
  this.innerHTML = "animationiteration event occured - The animation was played again";
  this.style.backgroundColor = "lightblue";
}

function myEndFunction() {
  this.innerHTML = "animationend event occured - The animation has completed";
  this.style.backgroundColor = "lightgray";
}




// before print
function beforeprint() {
  alert("You are about to print this document!");
}


// input upper case
function inputuppercase() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}


// change
function change() {
  var x = document.getElementById("mySelect").value;
  document.getElementById("selectedcar").innerHTML = "You selected: " + x;
}


// clickme
function clickme() {
  document.getElementById("clickme").innerHTML = "YOU CLICKED ME!";
}