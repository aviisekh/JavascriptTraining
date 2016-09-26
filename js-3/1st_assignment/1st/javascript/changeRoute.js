function changeRoute() {
    var hashMatched = false;
    var hash = location.hash.slice(1);
    var view = document.getElementById('view');


    function loadFile() {
        var file = routes[hash].fileName;
        var URL = "http://localhost:8000/contents/" + file;

        var request = new XMLHttpRequest();
        request.open('GET', URL);
        request.send();

        request.addEventListener('load', function() {
            view.innerHTML = request.responseText;
            routes[hash].controller();
        });

    }

    for (var path in routes) {
        if (hash == path) {
            loadFile();
            hashMatched = true;
            break;
        }

    }
    if (!hashMatched) {
        hash = "error";
        loadFile();
    }
}

if (location.hash.slice(1)) {
    changeRoute();
}

window.addEventListener('hashchange', function(event) {
    changeRoute();
});
