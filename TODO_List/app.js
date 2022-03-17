//SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//EVENT LISTENERS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//FUNCTION
function addTodo(event) {
	//Prevent form from submitting
	event.preventDefault();
	//Todo div
	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");
	//Create li
	const newTodo = document.createElement("li");
	newTodo.classList.add("todo-item");
	newTodo.innerText = todoInput.value;
	todoDiv.appendChild(newTodo);
	//Check Mark Button
	const completedButton = document.createElement("button");
	completedButton.classList.add("completed-btn");
	completedButton.innerHTML = '<i class="fas fa-check"></i>';
	todoDiv.appendChild(completedButton);

	//Check Trash Button
	const trashButton = document.createElement("button");
	trashButton.classList.add("trash-btn");
	trashButton.innerHTML = '<i class="fas fa-trash"></i>';
	todoDiv.appendChild(trashButton);
	//Append to list
	todoList.appendChild(todoDiv);
	//clear Todo-input
	todoInput.value = "";
}

function deleteCheck(e) {
	const item = e.target;
	//DELETE TODO
	if (item.classList[0] === "trash-btn") {
		const todo = item.parentElement;
		//Animation
		todo.classList.add("fall");
		todo.addEventListener("webkitTransitionEnd", function () {
			todo.remove();
		});
	}

	//CHECK TODO
	if (item.classList[0] === "completed-btn") {
		const todo = item.parentElement;
		todo.classList.toggle("completed");
	}
}

function filterTodo(e) {
	const todos = todoList.childNodes;
	todos.forEach(function (todo) {
		// console.log(todo);
		switch (e.target.value) {
			case "all":
				todo.style.display = "flex";
				break;
			case "completed":
				if (todo.classList.contains("completed")) {
					todo.style.display = "flex";
				} else {
					todo.style.display = "none";
				}
				break;
			case "uncompleted":
				if (!todo.classList.contains("completed")) {
					todo.style.display = "flex";
				} else {
					todo.style.display = "none";
				}
				break;
		}
	});
}
