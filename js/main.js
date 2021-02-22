'use strict'
const input = document.getElementById("input");
    const addTodoButton = document.getElementById("addTodoButton");
    const todoUL = document.getElementById("todoUL");
    const filterOptions = document.querySelector(".filter-todos");

    addTodoButton.addEventListener("click", addTodo);
    todoUL.addEventListener("click", remove);
    filterOptions.addEventListener("change", filterTodos);

    // Add todo
    function addTodo(e) {
      e.preventDefault();
      const todoText = input.value;
      const todoEl = `<li class="item"><p class="text">${todoText}</p>
      <button class="delete" id="deleteTodoButton"><i class="far fa-trash-alt"></i>Delete</button>
      <button class="complete" id="completeTodoButton"><i class="fas fa-check"></i>Completed</button>   
      </li>`;
      input.value = "";
      input.focus();

      if (!todoText) {
        alert("You must type a todo");
      } else {
        todoUL.insertAdjacentHTML("beforeend", todoEl);
      }
    }

    // Remove/Complete todo
    function remove(e) {
      if (e.target.id == "deleteTodoButton") {
        e.target.parentElement.remove();
        input.focus();
      } else if (e.target.id == "completeTodoButton") {
        e.target.previousElementSibling.previousElementSibling.classList.toggle(
          "completed"
        );
        input.focus();
      }
    }

    function filterTodos(e) {
      const todos = todoUL.childNodes;
      todos.forEach(function(todoEl) {
        if (todoEl.nodeName === "LI") {
          switch (e.target.value) {
            case "all":
              todoEl.style.display = "flex";
              break;

            case "completed":
              if (todoEl.children[0].classList.contains("completed")) {
                todoEl.style.display = "flex";
              } else {
                todoEl.style.display = "none";
              }
              break;

            case "uncompleted":
              if (todoEl.children[0].classList.contains("completed")) {
                todoEl.style.display = "none";
              } else {
                todoEl.style.display = "flex";
              }
              break;
          }
        }
      });
    }
 