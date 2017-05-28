var rightSide = document.getElementsByClassName("right-background")[0];
var leftSide = document.getElementsByClassName("left-background")[0];

window.addEventListener("scroll", function() {
	if (document.body.scrollTop > 275 || document.documentElement.scrollTop > 275) {
		rightSide.style.filter = "grayscale(100%)"
		leftSide.style.filter = "grayscale(100%)"
	} else {
		rightSide.style.filter = ""
		leftSide.style.filter = ""

	}
})
;