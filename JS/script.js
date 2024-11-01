/* Description: Custom JS file */

/* Navigation*/
// Collapse the navbar by adding the top-nav-collapse class
window.onscroll = function () {
	scrollFunction();
	scrollFunctionBTT(); // back to top button
};

window.onload = function () {
	scrollFunction();
};

let section = document.querySelectorAll('.section')
let navlink = document.querySelectorAll('nav-link')

window.onscroll=()=>{ 
	section.forEach(sec=>{
		let top=window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        

		if(top>offset && top<offset + height){
			navLink.forEach(links=>{
				links.classList.remove('active');
				document.querySelector('nav link[href*="' + id + '"]').classList.add('active');
			});
		};
	});
};

// Get references to the navbar
const navbar = document.getElementById('navbarExample');

// Track the last scroll position to determine if user is scrolling up or down
let lastScrollPosition = 0;

// Listen to the scroll event on the window
window.addEventListener('scroll', function() {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // If scrolling down, hide the navbar, else show it when scrolling up
    if (currentScrollPosition > lastScrollPosition) {
        // Scrolling down, hide navbar
        navbar.classList.add('navbar-hidden');
    } else {
        // Scrolling up, show navbar
        navbar.classList.remove('navbar-hidden');
    }

    // Update the last scroll position
    lastScrollPosition = currentScrollPosition;
});

// For initial page load - show the navbar
window.onload = function() {
    navbar.classList.remove('navbar-hidden');
};

function scrollFunction() {
	if (document.documentElement.scrollTop > 30) {
		document.getElementById("navbarExample").classList.add("top-nav-collapse");
	} else if ( document.documentElement.scrollTop < 30 ) {
		document.getElementById("navbarExample").classList.remove("top-nav-collapse");
	}
}

// Navbar on mobile
let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");

for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", () => {
		document.querySelector(".offcanvas-collapse").classList.toggle("open");
	});
}

document.querySelector(".navbar-toggler").addEventListener("click", () => {
  	document.querySelector(".offcanvas-collapse").classList.toggle("open");
});

// Hover on desktop
function toggleDropdown(e) {
	const _d = e.target.closest(".dropdown");
	let _m = document.querySelector(".dropdown-menu", _d);

	setTimeout(
		function () {
		const shouldOpen = _d.matches(":hover");
		_m.classList.toggle("show", shouldOpen);
		_d.classList.toggle("show", shouldOpen);

		_d.setAttribute("aria-expanded", shouldOpen);
		},
		e.type === "mouseleave" ? 300 : 0
	);
}

// On hover
const dropdownCheck = document.querySelector('.dropdown');

if (dropdownCheck !== null) { 
	document.querySelector(".dropdown").addEventListener("mouseleave", toggleDropdown);
	document.querySelector(".dropdown").addEventListener("mouseover", toggleDropdown);

	// On click
	document.querySelector(".dropdown").addEventListener("click", (e) => {
		const _d = e.target.closest(".dropdown");
		let _m = document.querySelector(".dropdown-menu", _d);
		if (_d.classList.contains("show")) {
			_m.classList.remove("show");
			_d.classList.remove("show");
		} else {
			_m.classList.add("show");
			_d.classList.add("show");
		}
	});
}
  

/* Back To Top Button */
// Get the button
myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunctionBTT() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		myButton.style.display = "block";
	} else {
		myButton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // for Safari
	document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}
