var routes = {};
var setRoute = function(path, fileName, controller) {
    routes[path] = {
        fileName: fileName,
        controller: controller
    };
};

setRoute('home', 'home.html', function() {
    document.title = 'Home';
});

setRoute('about-us', 'about-us.html', function() {
    document.title = 'About Us';
});

setRoute('contact-us', 'contact-us.html', function() {
    document.title = 'Contact Us';
});

setRoute('error', 'error.html', function() {
    document.title = '404 error';
});
