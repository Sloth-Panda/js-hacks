//is able to detect errors in js code and also restricts from doing certain actions//

//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions
function addTodo(event) {
	//prevents form from submitting
	event.preventDefault();

	//Todo div
	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');

	//todo li
	const newTodo = document.createElement('li');
	newTodo.innerText = todoInput.value;
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);

	//Check Mark Button
	const completedButton = document.createElement('button');
	completedButton.innerHTML = "<i class='fa fa-check'></i>";
	completedButton.classList.add('complete-btn');
	todoDiv.appendChild(completedButton);

	// Trash Button
	const trashButton = document.createElement('button');
	trashButton.innerHTML = "<i class='fa fa-trash'></i>";
	trashButton.classList.add('trash-btn');
	todoDiv.appendChild(trashButton);

	//adding todo to localStorage
	// saveLocalTodos(todoInput.value);

	//Append to list
	todoList.appendChild(todoDiv);

	//Clear Todo Input Value
	todoInput.value = '';
}

function deleteCheck(e) {
	const item = e.target;
	//Delete Todo
	if (item.classList[0] === 'trash-btn') {
		const todo = item.parentElement;
		//Animation
		todo.classList.add('fall');
		todo.addEventListener('transitionend', function () {
			todo.remove();
		});
	}
	//Check Mark
	if (item.classList[0] === 'complete-btn') {
		const todo = item.parentElement;
		todo.classList.toggle('completed');
	}
}

function filterTodo(e) {
	const todos = todoList.childNodes;
	todos.forEach(function (todo) {
		switch (e.target.value) {
			case 'all':
				todo.style.display = 'flex';
				break;
			case 'completed':
				if (todo.classList.contains('completed')) {
					todo.style.display = 'flex';
				} else {
					todo.style.display = 'none';
				}
				break;
			case 'uncompleted':
				if (!todo.classList.contains('completed')) {
					todo.style.display = 'flex';
				} else {
					todo.style.display = 'none';
				}
				break;
		}
	});
}

// function saveLocalTodos(todo) {
// 	//check  do I have already
// 	let todos;

// 	if (localStorage.getItem('todos') === null) {
// 		todos = [];
// 	} else {
// 		todos = JSON.parse(localStorage.getItem('todos'));
// 	}

// 	todos.push(todo);
// 	localStorage.setItem('todos', JSON.stringify(todos));
// }
