var rightSide = document.getElementsByClassName("right-background")[0];
var leftSide = document.getElementsByClassName("left-background")[0];
var menuBackground2 = document.getElementsByClassName("menu-background2")[0];
var skillsContainer = document.getElementsByClassName("skills-container")[0];

window.addEventListener("scroll", function() {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		rightSide.style.animation = 'grayscale 5s forwards'
		leftSide.style.animation  = 'grayscale 5s forwards'
	} else {
		rightSide.style.animation = 'colorIn 3s forwards'
		leftSide.style.animation  = 'colorIn 3s forwards'
	}
})

// window.addEventListener("scroll", function() {
// 	if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
// 		console.log("hi")
// 		menuBackground2.style.animation = 'menu-bg-fade 3s forwards'
// 	} else {
// 		menuBackground2.style.animation = ''
// 	}
// })










window.addEventListener("scroll", function() {
	if (document.body.scrollTop > 670) {
		menuBackground2.style.animation = 'menu-bg-fade 3s forwards'
	} else {
		menuBackground2.style.animation = 'menu-bg-fade-out1 2s'
	}
})

// window.addEventListener("scroll", function() {
// 	if (document.body.scrollTop > 780) {
// 		menuBackground2.style.animation = 'menu-bg-fade-midway 3s'
// 	} else {
// 		menuBackground2.style.animation = 'menu-bg-fade-back 3s forwards'
// 	}
// })


// window.addEventListener("scroll", function() {
// 	if (document.body.scrollTop > 1250 || document.documentElement.scrollTop > 1250) {
// 		skillsContainer.style.animation = 'fadeinOpacity 2s forwards'
// 	} else {
// 		skillsContainer.style.animation = 'fadeOutOpacity 2s'	
// 	}
// })



















