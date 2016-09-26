'use strict';
var httpUtil = new HttpUtil();

function render(todos) {

    var container = document.getElementById('todo-list');
    container.innerHTML = '';

    todos.data.forEach(function(todo) {
        var todoEntry = document.createElement('div');
        todoEntry.className = 'todo-entry';

        var checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.className = 'checkbox';
        if (todo.isComplete) {
            checkBox.checked = true;
        }

        var textBox = document.createElement('input');
        textBox.type = 'text';
        textBox.className = 'text-box';
        textBox.value = todo.title;
        var temp = textBox.value;
        var changeContent = function(){
        	console.log("here");
        	if (!textBox.value) {
                deleteTodo(todo.id);
            } else if (textBox.value !== todo.title) {
                modifyTodo(todo, textBox.value, 'title');
            }
        }


        textBox.addEventListener('keypress', function(event) {
            if (event.keyCode == 13) {
               console.log("pressed enter");
               changeContent();
               textBox.blur();
            }
        });

        textBox.onblur = function(){

        	textBox.value = temp; 
        };

        var delButton = document.createElement('button');
        delButton.type = 'button';
        delButton.innerHTML = 'DEL';

        todoEntry.appendChild(checkBox);
        todoEntry.appendChild(textBox);
        todoEntry.appendChild(delButton);
        // divs.push(todoEntry);
        container.appendChild(todoEntry);

        delButton.addEventListener('click', function() {
            deleteTodo(todo.id)
        });

        checkBox.addEventListener('click', function() {
            modifyTodo(todo, checkBox.checked, 'status');
        });
    });
}

httpUtil.get(render);


function addTodo() {
    var todo = {
        title: document.getElementById('todo').value,
        description: '',
        isComplete: false
    };

    httpUtil.post(todo, function() {
        httpUtil.get(render)
    });
}

function deleteTodo(todoId) {
    httpUtil.delete(todoId, function() {
        httpUtil.get(render);
    });
}


function modifyTodo(todo, modifiedValue, modifiedAttribute) {
    var newTodo;
    if (modifiedAttribute == 'status') {
        newTodo = {
            title: todo.title,
            description: todo.description,
            isComplete: modifiedValue
        };
    } else if (modifiedAttribute == 'title') {
        newTodo = {
            title: modifiedValue,
            description: todo.description,
            isComplete: todo.isComplete
        };
    }
    httpUtil.put(todo.id, newTodo)/*, function() {
        httpUtil.get(render);
    });*/
    // window.alert(modifiedAttribute + 'modified');
}


/*
function changeTodoStatus(todo, status) {
    var newTodo = {
        title: todo.title,
        description: todo.description,
        isComplete: status
    };

    httpUtil.put(todo.id, newTodo, function() {
        httpUtil.get(render);
    });
}


function changeTodoTitle(todo, newTitle) {
    var newTodo = {
        title: newTitle,
        description: todo.description,
        isComplete: todo.isComplete
    };

    httpUtil.put(todo.id, newTodo, function() {
        httpUtil.get(render);
    });
}
*/
