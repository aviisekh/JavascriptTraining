;
(function() {
    var router = new Router(document.getElementById('view'));
    // console.log("")
    var path = location.hash.slice(1);

    router.setRoute('home', 'home.html', function() {
        document.title = 'Home';
    });

    router.setRoute('about-us', 'about-us.html', function() {
        document.title = 'About Us';
    });

    router.setRoute('contact-us', 'contact-us.html', function() {
        document.title = 'Contact Us';
    });

    router.setRoute('error', 'error.html', function() {
        document.title = '404 error';
    });


    if (path) {
        router.changeRoute(path);
    }

    window.addEventListener('hashchange', function(event) {
        router.changeRoute(location.hash.slice(1));
    });




})();
