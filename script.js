let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function (){
	navbar.classList.toggle("active");
});

window.onscroll = () => {
	navbar.classList.remove("active");
};

window.addEventListener('contextmenu',(e) =>{
	e.preventDefault();
	console.log("right clicked");
});

var cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    mouseX = 0,
    mouseY = 0

gsap.to({}, 0.016, {
    repeat: -1,

    onRepeat: function () {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
});

window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY
});

const bg22 = document.getElementById('footer-img');
window.addEventListener('scroll', function(){
	bg22.style.backgroundSize = 125 - +window.scrollY/85+'%';
});

window.addEventListener("load", () => {
	const loader = document.querySelector(".loader");

	loader.classList.add("loader--hidden");

	loader.addEventListener("transitionend", () => {
		document.body.removeChild(loader);
	});

});




