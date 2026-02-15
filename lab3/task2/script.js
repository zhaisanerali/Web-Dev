// script.js
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

/**
 * Функция создания нового элемента списка
 * @param {string} text - Текст задачи
 */
function createTodoItem(text) {
  // 1. Создаем контейнер li
  const li = document.createElement('li');
  li.className = 'todo-item';

  // 2. Создаем чекбокс
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed');
  });

  // 3. Создаем текст задачи
  const span = document.createElement('span');
  span.className = 'todo-text';
  span.textContent = text;

  // 4. Создаем кнопку удаления (иконка корзины)
  const delBtn = document.createElement('button');
  delBtn.className = 'delete-btn';
  delBtn.innerHTML = '&#128465;'; // HTML сущность корзины
  delBtn.addEventListener('click', () => {
    todoList.removeChild(li);
  });

  // 5. Собираем всё вместе и добавляем в список
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);
  
  return li;
}

// Обработка отправки формы
todoForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Чтобы страница не перезагружалась

  const taskText = todoInput.value.trim();
  
  if (taskText !== '') {
    const newItem = createTodoItem(taskText);
    todoList.appendChild(newItem);
    todoInput.value = ''; // Очищаем поле ввода
    todoInput.focus();
  }
});