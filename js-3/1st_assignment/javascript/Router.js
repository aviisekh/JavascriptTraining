function Router(container) {
    var routes = {};
    this.container = container;

    this.setRoute = function(path, fileName, controller) {
        routes[path] = {
            fileName: fileName,
            controller: controller
        };
    }

    this.renderContent = function(hash) {
        var file = routes[hash].fileName;
        var URL = "http://localhost:8000/contents/" + file;
        var that = this;
        var request = new XMLHttpRequest();
        request.open('GET', URL);
        request.send();

        request.addEventListener('load', function() {
            that.container.innerHTML = request.responseText;
            routes[hash].controller();
        });

    }

    this.changeRoute = function(path) {
        var file = 'error';

        for (var key in routes) {
            if (key == path) {
                file = path;
                break;
            }

        }

        this.renderContent(file);
    }
}
