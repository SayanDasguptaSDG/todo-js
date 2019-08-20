//database access
function getTodos(){
var todos=new Array;
var todos_storage=localStorage.getItem('todo');
if(todos_storage != null){
todos=JSON.parse(todos_storage);
}
return todos;
}

//adding the todos
function add(){
var task=document.getElementById('task').value;
var todos=getTodos();
todos.push(task);
localStorage.setItem('todo',JSON.stringify(todos));
show();
return false;
}

//showing all the todos
function show(){
var todos=getTodos();
var html='<ul>';
for(var i=0;i<todos.length;i++){
html=html+'<li>'+todos[i]+'<button class="remove" id="'+i+'">x</button></li>';
};
html=html+'</ul>';
document.getElementById('todos').innerHTML=html;
var buttons=document.getElementByClass('remove');
for(var i=0;i<buttons.length;i++){
buttons[i].addEventListener('click',remove);
};
}









document.getElementById("add").addEventListener("click", add);
show();