

 var rightSide = document.getElementsByClassName("right-background")[0];
 var leftSide = document.getElementsByClassName("left-background")[0];
 var menuBackground2 = document.getElementsByClassName("menu-background2")[0];
 var skillsContainer = document.getElementsByClassName("skills-container")[0];

// ==============================================================
window.addEventListener("scroll", parallax);
function parallax() {
var parallax = document.getElementsByClassName("parallax")[0];
	ypos = window.pageYOffset;
	parallax.style.top = ypos * .53 + "px";
}
// ==============================================================
	var helloAnimation = document.getElementsByClassName("helloWorld")[0];

// window.onload = function() {

	setInterval(function(){
	helloAnimation.style.animation = 'swell .950s ease-in' 

	helloAnimation.addEventListener("animationend",function(e){
	    helloAnimation.style.animation = 'swellBack .850s'
	},false);

		},950)
// }
		window.addEventListener("scroll", function() {
		if (window.pageYOffset > 1) {
			//somehting goes here
		}
	})
		
		
// ==============================================================
window.addEventListener("scroll", function() {
 var display = document.getElementsByClassName("display")[0];
 var scroll = window.pageYOffset;
 display.innerHTML = scroll
})
firstScroll = false;
// ==============================================================
window.addEventListener("scroll", grayScale);
function grayScale() {
	if (window.pageYOffset > 100) {
		rightSide.style.animation = 'grayScale 2s forwards'
		leftSide.style.animation = 'grayScale 2s forwards'
		firstScroll = true;
	}
	if (firstScroll && window.pageYOffset < 100) {
		colorBack();
	}
}
	function colorBack() {
		rightSide.style.animation = 'colorIn 2s forwards'
		leftSide.style.animation = 'colorIn 2s forwards'
}
// ==============================================================
window.addEventListener("scroll", menuBgFade);
function menuBgFade() {
	if (window.pageYOffset > 720) {
		firstScroll = true
		menuBackground2.style.animation = 'menu-bg-fade 1s forwards'
		} else if (firstScroll && window.pageYOffset < 720) {
				scrollUpMenuFadeBack();
		}
}
	function scrollUpMenuFadeBack() {
		menuBackground2.style.animation = 'menu-bg-fade-out1 1s forwards'
}
// ==============================================================
//black on load fix
// ==============================================================
var blackScreenFix = document.getElementsByClassName("blackScreenFix")[0];
window.onload = function() {
	blackScreenFix.scrollIntoView();
}
// ==============================================================

// ==============================================================



// scrollTop = scrollTop / 2
var container = document.getElementById('container');
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = 1000 - windowHeight;

 var scrollTop = window.pageYOffset || window.scrollTop;
  var scrollPercent = scrollTop/scrollArea || 0;


window.addEventListener("scroll", function() {
	var windowHeight = window.innerHeight;
	var windowWidth = window.innerWidth;
	var scrollArea =  windowHeight;

	var scrollTop = window.pageYOffset || window.scrollTop;
	var scrollPercent = scrollTop/scrollArea || 0;
	console.log(scrollArea)

	if (scrollTop > 100) {
		leftSide.style.left = scrollPercent*window.innerWidth + 'px';
		 // ightSide.style.left =  scrollTop + 'px';
	}
})


















































