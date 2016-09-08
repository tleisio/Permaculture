console.log('Configuring application libraries...');

requirejs.config({
    baseUrl: 'js',
    paths: {
        app: '../app',
        ko: 'libs/ko',
        text: 'libs/text'
    }
});

requirejs(['app','ko','text','controller','router'], function(app, ko, text, controller, router){
    // The "app" dependency is passed in as "App"
    console.log('Libraries configured.');
    
    console.log('Configuring globals...');

    function AppVM() {
        var self = this;

        self.intAppHeight = ko.observable(0);
        self.intAppWidth = ko.observable(0);

        self.pageName = ko.observable('init');

        self.init = function() {
            console.log('Application initialized.');
            
            //check for deeplinks on initial site load
            var pathResponse = router.changePage();
            app.pageName(pathResponse);
        }

        self.windowResize = function() {
            self.intAppWidth(window.innerWidth);
            self.intAppHeight(window.innerHeight);
        }
    }

    var app = new AppVM();

    // Register components
    console.log('Component registration...');
    ko.components.register('global-header', {require: 'components/global-header/global-header' });
    ko.components.register('page-home', {require: 'components/page-home/page-home' });
    ko.components.register('form-signin', {require: 'components/form-signin/form-signin' });
    console.log("Components registered.");

    // Apply bindings
    ko.applyBindings(app);

    // App event listeners
    window.onresize = function() {
        app.windowResize();
    }
    window.onpopstate = function(event) {
        var pathResponse = router.changePage();
        app.pageName(pathResponse);
    }

    console.log("Application initializing...");
    app.windowResize();
    app.init();
});
