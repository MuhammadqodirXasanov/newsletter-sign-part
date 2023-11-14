const form = document.querySelector('.form');
const input = document.querySelector('.sign-inp');
const errText = document.querySelector('.err-text');
const successPart = document.querySelector('.success-box');
const signPart = document.querySelector('.sign-box');
const enteredEmail = document.querySelector('.entered-email');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	if (!input.value.includes('@') || !input.value.includes('.')) {
		input.classList.add('inp-err');
		errText.style.display = 'block';

		setTimeout(() => {
			input.classList.remove('inp-err');
			errText.style.display = 'none';
		}, 4000);
	} else {
		signPart.style.display = 'none';
		successPart.style.display = 'block';

		enteredEmail.innerHTML = input.value;
	}
});

function redirectMain() {
	signPart.style.display = 'flex';
	successPart.style.display = 'none';
}
