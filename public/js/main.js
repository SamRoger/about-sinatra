var rightSide = document.getElementsByClassName("right-background")[0];
var leftSide = document.getElementsByClassName("left-background")[0];

window.addEventListener("scroll", function() {
	if (document.body.scrollTop > 230 || document.documentElement.scrollTop > 230) {
		rightSide.style.filter = 'grayscale(100%)'
		leftSide.style.filter = 'grayscale(100%)'
	} else {
		rightSide.style.filter = ""
		leftSide.style.filter = ""
	}
})

var menuBackground2 = document.getElementsByClassName("menu-background2")[0];

window.addEventListener("scroll", function() {
	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
		menuBackground2.style.backgroundColor = 'rgb(168,86,79)'
	} else {
		menuBackground2.style.backgroundColor = ''
	}
})


var skillsContainer = document.getElementsByClassName("skills-container")[0];

window.addEventListener("scroll", function() {
	if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
		skillsContainer.style.animation = 'fadeinOpacity 10s forwards'
		console.log("hi")
	} else {
		skillsContainer.style.animation = ''	
	}
})



















