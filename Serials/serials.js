'use strict';

let button1 = document.querySelector('.button1'),
	button2 = document.querySelector('.button2'),
	more = document.querySelector('.more'),
	dots = document.querySelector('.dots');

more.classList.add('active');
button2.classList.add('active');

button1.addEventListener('click', () =>{
	more.classList.remove('active');
	dots.classList.add('active');
	button1.classList.add('active');
	button2.classList.remove('active');
});

button2.addEventListener('click', () =>{
	more.classList.add('active');
	dots.classList.remove('active');
	button1.classList.remove('active');
	button2.classList.add('active');
});

