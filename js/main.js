const input = document.getElementById('input');
const addTodoButton = document.getElementById('addTodoButton');
const todoUL = document.getElementById('todoUL');
const filterOptions = document.querySelector('.filter-todos');

// Add todo
function addTodo(e) {
  e.preventDefault();
  const todoText = input.value;
  const todoEl = `<li class="item"><p class="text">${todoText}</p>
      <button class="delete button" id="deleteTodoButton">&#10006;</button>
      <button class="complete button" id="completeTodoButton">&#10004;</button>   
      </li>`;
  input.value = '';
  input.focus();

  if (!todoText) {
    alert('You must type a todo');
  } else {
    todoUL.insertAdjacentHTML('beforeend', todoEl);
  }
}

// Remove/Complete todo
function remove(e) {
  if (e.target.id === 'deleteTodoButton') {
    e.target.parentElement.remove();
    input.focus();
  } else if (e.target.id === 'completeTodoButton') {
    e.target.previousElementSibling.previousElementSibling.classList.toggle(
      'completed'
    );

    input.focus();
  }
}

function filterTodos(e) {
  const todos = todoUL.childNodes;
  todos.forEach((todoEl) => {
    if (todoEl.nodeName === 'LI') {
      const todoElem = todoEl;
      switch (e.target.value) {
        case 'all':
          todoElem.style.display = 'flex';
          break;

        case 'completed':
          if (todoElem.children[0].classList.contains('completed')) {
            todoElem.style.display = 'flex';
          } else {
            todoElem.style.display = 'none';
          }
          break;

        case 'uncompleted':
          if (todoElem.children[0].classList.contains('completed')) {
            todoElem.style.display = 'none';
          } else {
            todoElem.style.display = 'flex';
          }
          break;
        default:
          break;
      }
    }
  });
}

addTodoButton.addEventListener('click', addTodo);
todoUL.addEventListener('click', remove);
filterOptions.addEventListener('change', filterTodos);
