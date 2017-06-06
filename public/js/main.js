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
var display = document.getElementsByClassName("display")[0];
var scroll = window.pageYOffset;
display.innerHTML = scroll
// ==============================================================
// window.addEventListener("scroll", menuBgFade);
// function menuBgFade() {
// 	console.log("down")
// 	if (document.body.scrollTop > 720) {
// 		menuBackground2.style.animation = 'menu-bg-fade 3s forwards'
// 	}
// }
// window.addEventListener("scroll", bottomUpScroll)
// function bottomUpScroll() {
// 	if (window.pageYOffset > 719) {
// 		scrollDirection = false
// 	} else if (scrollDirection === false) {
// 		console.log("up")
// 		menuBackground2.style.animation = 'menu-bg-fade-out1 3s forwards'
// 	}
// }


window.addEventListener("scroll", test);
function test() {

if (window.pageYOffset > scroll) {
	console.log("down")
	if (window.pageYOffset > 100) {
		console.log("down under 100")
	}
}  else {
	if (window.pageYOffset < 100) {
		console.log("up over 100")
	}
		console.log("up")
	}
		scroll = window.pageYOffset

	// if (window.pageYOffset > 100) {
	// 	menuBackground2.style.animation = 'menu-bg-fade 3s forwards'
	// 	console.log("down")
	// }

	// if (window.pageYOffset === currentScroll) {
	// 	currentScroll = true
	// } if (currentScroll === true) {
	// 	menuBackground2.style.animation = 'menu-bg-fade-out1 3s forwards'
	// 	console.log("up")
	// }
}



















