// DOM Elements
const questions = document.querySelectorAll('.q');
const icons = document.querySelectorAll('.icons img');

// Event listeners
questions.forEach((question) => {
	question.addEventListener('click', (e) => {
		e.currentTarget.parentElement.classList.toggle('collapsed');
	});
});

icons.forEach((icon) => {
	icon.addEventListener('click', (e) => {
		e.currentTarget.parentElement.classList.toggle('open');
	});
});

/* 
No time to add
const animators = document.querySelectorAll('.will-animate');
const callback = (entries, observer) => {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		}
		entry.target.classList.add('fadeIn');
		observer.unobserve(entry.target);
	});
};

const observer = new IntersectionObserver(callback, {
	root: null,
	threshold: 1,
	rootMargin: '0px 0px -100px 0px',
});

animators.forEach((animator) => observer.observe(animator));
*/
