var coffee = document.getElementById("coffee");
var spill = document.getElementById("spill");
var audio = document.getElementById("audio");
  coffee.onclick = function() {
    coffee.style.visibility = "hidden";
    spill.style.visibility = "visible";
    audio.play();
  }

var works = document.getElementById("works2");
  	works.onclick = function() {
    window.location.replace("#works");
}
var about = document.getElementById("about2");
  	about.onclick = function() {
    window.location.replace("#about");
}
var contact = document.getElementById("contact2");
  	contact.onclick = function() {
    window.location.replace("#contact");
}

AOS.init();

var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("myBtn1");
var span1 = document.getElementsByClassName("close")[0];
btn1.onclick = function(e11) {
  modal1.style.display = "block";
}

var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("close")[0];
btn2.onclick = function(e21) {
  modal2.style.display = "block";
}

var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("myBtn3");
var span3 = document.getElementsByClassName("close")[0];
btn3.onclick = function(e31) {
  modal3.style.display = "block";
}

var modal4 = document.getElementById("myModal4");
var btn4 = document.getElementById("myBtn4");
var span4 = document.getElementsByClassName("close")[0];
btn4.onclick = function(e41) {
  modal4.style.display = "block";
}

var modal5 = document.getElementById("myModal5");
var img = document.getElementById("myBtn5");
var modalImg = document.getElementById("img01");
img.onclick = function(e51){
  modal5.style.display = "block";
  modalImg.src = img01.src;
}

var modal6 = document.getElementById("myModal6");
var mp4 = document.getElementById("myBtn6");
var modalmp4 = document.getElementById("mp406");
mp4.onclick = function(e61){
  modal6.style.display = "block";
  modalmp4.src = mp406.src;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal1.style.display = "none";
}

document.onclick = function(event) {
if (event.target == modal1 || event.target == modal2 || event.target == modal3 || event.target == modal4 || event.target == modal5 || event.target == modal6) {
event.target.style.display = "none";
}
}

var audio1 = document.getElementById("audio1");
function playAudio1() {
  audio1.play();
}
function stopAudio1() {
  audio1.pause();
}

var audio2 = document.getElementById("audio2");
function playAudio2() {
  audio2.play();
}
function stopAudio2() {
  audio2.pause();
}

var audio3 = document.getElementById("audio3");
function playAudio3() {
  audio3.play();
}
function stopAudio3() {
  audio3.pause();
}

var audio4 = document.getElementById("audio4");
function playAudio4() {
  audio4.play();
}
function stopAudio4() {
  audio4.pause();
}

var audio5 = document.getElementById("audio5");
function playAudio5() {
  audio5.play();
}
function stopAudio5() {
  audio5.pause();
}

var audio6 = document.getElementById("audio6");
function playAudio6() {
  audio6.play();
}
function stopAudio6() {
  audio6.pause();
}

var audio7 = document.getElementById("audio7");
function playAudio7() {
  audio7.play();
}
function stopAudio7() {
  audio7.pause();
}
