function get_todos(){
    var todos=new Array;
    var todos_str=localStorage.getItem('todo');
    if(todos_str!==null){
        todos=JSON.parse(todos_str);
    }
    return todos;
}
function add(){
    var task=document.getElementById('task').value;
    if(task==""){
        alert("please enter a valid task")
    }else{    
    var todos=get_todos();
    todos.push(task);
    localStorage.setItem('todo',JSON.stringify(todos));
    Show();
    return false;
    }
}
function remove(){
    var id=this.getAttribute('id');
    var todos=get_todos();
    todos.splice(id,1);
    localStorage.setItem('todo',JSON.stringify(todos));
    Show();
    return false;
}
function Show(){
    var todos=get_todos();
    if(todos.length<1){
        var html="No Task Added";
        document.getElementById('todos').innerHTML=html;
    }else{
    var html='<ul>';
    for(var i=0;i<todos.length;i++){
        html+='<li>'+todos[i]+'<button class="remove"id="'+i+'">remove</button></li>';
    };
    html+='</ul>';
    document.getElementById('todos').innerHTML=html;
    var buttons=document.getElementsByClassName('remove');
    for (var i=0; i<buttons.length;i++){
        buttons[i].addEventListener('click',remove);
    };
    }
}
document.getElementById('add').addEventListener('click',add);
Show();
