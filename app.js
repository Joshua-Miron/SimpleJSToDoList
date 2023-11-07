const form = document.querySelector('#add-item');
const input = document.querySelector('#new-item');
const friendList = document.querySelector('#to-do-list');

friendList.addEventListener('click', function(e) {
	if (e.target.tagName === 'BUTTON') {
		e.target.parentElement.remove();
	}	else if (e.target.tagName === 'LI') {
		e.target.classList.add('completed');
	}
});

form.addEventListener('submit', function(e) {
	e.preventDefault();
	const newFriend = document.createElement('li');
	const removeBtn = document.createElement('button');
	removeBtn.innerText = 'Remove from list';

	newFriend.innerText = input.value;
	newFriend.appendChild(removeBtn);
	friendList.appendChild(newFriend);
	input.value = '';
});
