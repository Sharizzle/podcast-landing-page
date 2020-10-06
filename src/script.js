import AOS from 'aos';
import 'aos/dist/aos.css';

const toggleNavbar = (collapseID) => {
	document.getElementById(collapseID).classList.toggle('hidden');
	document.getElementById(collapseID).classList.toggle('block');
};

document.querySelector('#hamburger').addEventListener('click', () => toggleNavbar('example-collapse-navbar'));

AOS.init({
	delay: 400,
	duration: 800,
	once: true
});
