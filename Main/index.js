'use strict';

let button = document.querySelector('.button');
let button_2 = document.querySelector('.button_2');
let active = document.querySelector('.active');

button.classList.remove('button_active');

button.addEventListener('click', () => {
	active.classList.remove('active');
	button.classList.add('button_active');
	button_2.classList.remove('button_active_2');
});

button_2.addEventListener('click', () => {
	active.classList.add('active');
	button.classList.remove('button_active');
	button_2.classList.add('button_active_2');
});