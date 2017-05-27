var photos = document.getElementById("photos");
var contact = document.getElementById("contact");
var home = document.getElementById("home");
var period = document.getElementsByClassName("period")[0];

setTimeout(function() {
	period.classList.add("period");
},1000)

home.addEventListener("click", function() {
	home.style.backgroundColor = '#fff';
	home.style.color = '#000'
	home.style.textShadow = 'none'
})

photos.addEventListener("click", function() {
	photos.style.backgroundColor = '#fff';
	photos.style.color = '#000'
	photos.style.textShadow = 'none'
})

