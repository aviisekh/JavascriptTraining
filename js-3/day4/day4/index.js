var URL = 'http://todo-simple-api.herokuapp.com/todos';
var httpUtil = new HttpUtil();

// GET Todos
function render(todos) {
  var div = document.createElement('div');

  console.log(todos);
  todos.data.forEach(function (todo) {
    // console.log(todo.title);
  });
}

httpUtil.get(render);

// POST Todo
var todo = {
  title: 'hawa part 2',
  description: 'hawa',
  isComplete: false
};

httpUtil.post(todo, function () {
  console.log('post bhayo')
});