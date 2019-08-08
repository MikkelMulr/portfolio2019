window.onload = function() {
	const firstLetters = document.querySelectorAll('#firstName .letter');
	const lastLetters = document.querySelectorAll('#lastName .letter');

	const MENU = document.querySelector('Menu');
	const MENU_ITEMS = document.querySelectorAll('.Menu-item');
	const MENU_LAYER = document.querySelector('.Menu-underlayer');
	const OPEN_MENU = document.querySelector('.Home-header-menu');
	const CLOSE_MENU = document.querySelector('.Menu-header-close');

	// Generate random number based on name length
	function getRand() {
		return Math.floor(Math.random() * firstLetters.length);
	}

	// Close Menu
	function closeMenu() {
		MENU_LAYER.classList.remove('reveal-layer');
		MENU_LAYER.classList.add('hide-layer');
		document.querySelector('.Menu').classList.toggle('reveal');
		document.querySelector('.Menu').classList.toggle('hide');
		document.querySelector('.Menu').classList.add('hidden');
		setTimeout(() => {
			MENU_LAYER.classList.add('hide-layer-disabled');
		}, 800);
	}

	// scramble/ decode/ change color of first name
	setInterval(() => {
		let rand = getRand();
		if (getRand() < 3) {
			firstLetters[rand].classList.toggle('scrambled');
			firstLetters[rand].classList.toggle('decoded');
			firstLetters[rand].classList.add('accent-color');
		} else {
			firstLetters[rand].classList.toggle('scrambled');
			firstLetters[rand].classList.toggle('decoded');
			firstLetters[rand].classList.remove('accent-color');
		}
	}, 620);

	// scramble/ decode/ change color of last name
	setInterval(() => {
		let rand = getRand();
		if (getRand() < 3) {
			lastLetters[rand].classList.toggle('scrambled');
			lastLetters[rand].classList.toggle('decoded');
			lastLetters[rand].classList.add('accent-color');
		} else {
			lastLetters[rand].classList.toggle('scrambled');
			lastLetters[rand].classList.toggle('decoded');
			lastLetters[rand].classList.remove('accent-color');
		}
	}, 820);

	// Open menu
	OPEN_MENU.addEventListener('click', function() {
		MENU_LAYER.classList.add('reveal-layer');
		MENU_LAYER.classList.remove('hide-layer-disabled');
		setTimeout(() => {
			document.querySelector('.Menu').classList.toggle('reveal');
			document.querySelector('.Menu').classList.toggle('hidden');
			document.querySelector('.Menu').classList.remove('hide');
		}, 120);
	});

	// Close menu
	CLOSE_MENU.addEventListener('click', function() {
		closeMenu();
	});

	// Close meny on menu item click, also add scroll function here
	MENU_ITEMS.forEach((item) => {
		console.log(item);
		item.addEventListener('click', function() {
			// scroll to selected element
			document.getElementById(`${item.textContent.toLowerCase()}`).scrollIntoView({ behavior: 'smooth', block: 'end' });
			closeMenu();
		});
	});
};
