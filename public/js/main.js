var rightSide = document.getElementsByClassName("right-side")[0];
var picture = document.getElementsByClassName("sam-picture")[0];

window.addEventListener("scroll", function() {
	if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
		rightSide.classList.add = 'grayScale'
		picture.classList.add = 'grayScale'
	}
})