

 var rightSide = document.getElementsByClassName("right-background")[0];
 var leftSide = document.getElementsByClassName("left-background")[0];
 var menuBackground2 = document.getElementsByClassName("menu-background2")[0];
 var skillsContainer = document.getElementsByClassName("skills-container")[0];
// ==============================================================
window.addEventListener("scroll", parallax);
function parallax() {
var parallax = document.getElementsByClassName("parallax")[0];
	ypos = window.pageYOffset;
	parallax.style.top = ypos * .5 + "px";
}

// ==============================================================
window.addEventListener("scroll", function() {
 var display = document.getElementsByClassName("display")[0];
 var scroll = window.pageYOffset;
 display.innerHTML = scroll
})
// ==============================================================
window.addEventListener("scroll", grayScale);
function grayScale() {
	if (window.pageYOffset > 100) {
		rightSide.style.animation = 'grayScale 2s forwards'
		leftSide.style.animation = 'grayScale 2s forwards'
		} else if (window.pageYOffset < 100) {
				colorBack();
		}
}
	var colorBack = function colorBack() {
		rightSide.style.animation = 'colorIn 2s forwards'
		leftSide.style.animation = 'colorIn 2s forwards'
}
// ==============================================================
window.addEventListener("scroll", menuBgFade);
function menuBgFade() {
	if (window.pageYOffset > 720) {
		menuBackground2.style.animation = 'menu-bg-fade 1s forwards'
		} else if (window.pageYOffset < 720) {
				scrollUpMenuFadeBack();
		}
}
var scrollUpMenuFadeBack = function scrollUpMenuFadeBack() {
		menuBackground2.style.animation = 'menu-bg-fade-out1 1s forwards'
}
// ==============================================================













