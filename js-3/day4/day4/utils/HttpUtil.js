var URL = 'http://todo-simple-api.herokuapp.com/todos';

function HttpUtil() {

  this.get = function (cb) {
    var request = new XMLHttpRequest();

    request.open('GET', URL);
    request.send();
    request.addEventListener('load', function () {
      cb(JSON.parse(request.responseText));
    });
  };

  this.post = function (body, cb) {
    var request = new XMLHttpRequest();
    
    request.open('POST', URL);
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    request.send(JSON.stringify(body));
    request.addEventListener('load', function () {
      // Do Something Here in the Callback (eg: Call the List of Todos Again)
      cb();
    });
  };

  this.put = function () {
    // Write for put

  };

  this.delete = function () {
    // Write for delete

  };
}
