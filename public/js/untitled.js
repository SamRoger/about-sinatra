




var rightSide = document.getElementsByClassName("right-background")[0];
var leftSide = document.getElementsByClassName("left-background")[0];
var menuBackground2 = document.getElementsByClassName("menu-background2")[0];
var skillsContainer = document.getElementsByClassName("skills-container")[0];


window.addEventListener("scroll", goGray);
function goGray() {
 scrollTop = window.pageYOffset;
 scroll2 = document.documentElement.scrollTop;
scrollBottom = document.body.scrollBottom
	if (document.body.lastScrollTop > 500) {

		alert("hi")
		// rightSide.style.animation = 'grayscale 1s forwards'
		// leftSide.style.animation  = 'grayscale 1s forwards'
	} 
}

window.addEventListener("scroll", menuBGBack)
function menuBGBack() {
	scroll = window.pageYOffset;
	scroll2 = document.documentElement.scrollTop;

	if (scroll === 99) {
		rightSide.style.animation = 'colorIn 1s forwards'
		leftSide.style.animation  = 'colorIn 1s forwards'
	}
}








window.addEventListener("scroll", menuBgFade);
function menuBgFade() {
	if (document.body.scrollTop > 720) {
		menuBackground2.style.animation = 'menu-bg-fade 3s forwards'
	}
}
window.addEventListener("scroll", bottomUpScroll)
function bottomUpScroll() {
	if (window.pageYOffset > 719) {
		scrollDirection = false
	} else if (scrollDirection === false) {
		menuBackground2.style.animation = 'menu-bg-fade-out1 3s forwards'
	}
}









window.addEventListener("scroll", parallax);
function parallax() {
var parallax = document.getElementsByClassName("parallax")[0];
	ypos = window.pageYOffset;
	parallax.style.top = ypos * .5 + "px";
}


scrollDirection = "up"
prevScroll = 0



	



























var display = document.getElementsByClassName("display")[0];
var scroll = window.pageYOffset;

display.innerHTML = scroll








window.addEventListener("scroll", test2);
function test2() {
if (window.pageYOffset > scroll) {
	console.log("down")
	if (window.pageYOffset > 720) {
		console.log("down over 720")
	}
}  else {
	if (window.pageYOffset < 720) {
		console.log("up under 720")
	}
		console.log("up")
	}
		scroll = window.pageYOffset
}




















