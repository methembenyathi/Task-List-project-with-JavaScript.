var ul = document.getElementById('task-list');
var addBtn = document.getElementById('add');

function addTask(){
var task = document.getElementById('tasks').value;
var li = document.createElement("li");
li.innerHTML = task;
document.getElementById("task-list").appendChild(li);

}

function deleteTask(li){
ul.innerHTML='';

}

