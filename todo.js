const toDoList = document.querySelector('.todo-list')
const input = document.getElementById('new-todo')
const button = document.querySelector('#add-todo')
const todos = JSON.parse(localStorage.getItem('todo-list')) || []

const renderTodos = () => {
    toDoList.innerHTML = ''
    todos.forEach(todo => {
        const li = document.createElement('li')
        li.textContent = todo.text
        toDoList.append(li)
    })
}

button.addEventListener('click', () => {
    todos.push({ text: input.value, completed: false })
    localStorage.setItem('todo-list', JSON.stringify(todos))
    input.value = ''
    renderTodos()
})

renderTodos()