var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var toDos = JSON.parse(localStorage.getItem('list_tasks')) || [];

function renderToDos() {
  listElement.innerHTML = '';

  for (task of toDos) {
    var taskElement = document.createElement('li');
    var taskText = document.createTextNode(task+' ');

    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');

    var pos = toDos.indexOf(task); // retorna o index do valor
    linkElement.setAttribute('onclick', 'deleteTask(' + pos + ')');

    
    var linkText = document.createTextNode('delete');
    linkElement.appendChild(linkText);
    
    var trashIcon = document.createElement('img');
    trashIcon.setAttribute('src', './assets/trash-2.svg');

    linkElement.appendChild(trashIcon);

    taskElement.appendChild(taskText);
    taskElement.appendChild(linkElement);
    
    listElement.appendChild(taskElement);
  }
};

renderToDos()

function addTask() {
  var newTask = inputElement.value;

  toDos.push(newTask);
  inputElement.value = '';
  renderToDos();
  saveTaskInStorage();

}

buttonElement.onclick = addTask;


function deleteTask(pos) {
  toDos.splice(pos, 1);
  renderToDos();
  saveTaskInStorage();
}

function saveTaskInStorage() {
  localStorage.setItem('list_tasks', JSON.stringify(toDos));
}