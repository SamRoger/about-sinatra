

// var rightSide = document.getElementsByClassName("right-background")[0];
// var leftSide = document.getElementsByClassName("left-background")[0];
 var menuBackground2 = document.getElementsByClassName("menu-background2")[0];
// var skillsContainer = document.getElementsByClassName("skills-container")[0];
// // ==============================================================
// window.addEventListener("scroll", parallax);
// function parallax() {
// var parallax = document.getElementsByClassName("parallax")[0];
// 	ypos = window.pageYOffset;
// 	parallax.style.top = ypos * .5 + "px";
// }
// // ==============================================================
// // ==============================================================
// window.addEventListener("scroll", test);
// function test() {

// 	if (window.pageYOffset > 100) {
// 		menuBackground2.style.animation = 'menu-bg-fade 2s forwards'
		
// 		console.log("down over 100")
// }  else {
// 	if (window.pageYOffset < 100) {
// 		menuBackground2.style.animation = 'menu-bg-fade-out1 2s forwards'
// 		console.log("up under 100")
// 	}
// 		console.log("up")
// 	}
// 		scroll = window.pageYOffset
// }

var quit = false
// ==============================================================
var display = document.getElementsByClassName("display")[0];
var scroll = window.pageYOffset;
display.innerHTML = scroll
// ==============================================================
window.addEventListener("scroll", test2);
function test2() {
	if (window.pageYOffset > 100) {
		menuBackground2.style.animation = 'menu-bg-fade 1s forwards'
		} else if (window.pageYOffset < 100) {
				scrollUp();
		}
}


window.addEventListener("scroll", scrollUp);
var scrollUp = function scrollUp() {
		menuBackground2.style.animation = 'menu-bg-fade-out1 1s forwards'
}
// // ==============================================================
















