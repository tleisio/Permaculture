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
    console.log('Page and component registration...');
    ko.components.register('global-header', {require: 'components/global-header/global-header' });
    ko.components.register('page-home', {require: 'components/page-home/page-home' });
    ko.components.register('page-process', {require: 'components/page-process/page-process' });
    ko.components.register('page-proto', {require: 'components/page-proto/page-proto' });
	ko.components.register('panel-plantdetails', {require: 'components/panel-plantdetails/panel-plantdetails' });
	// !#page-insertion-point-above
	ko.components.register('list-plants', {require: 'components/list-plants/list-plants' });
	ko.components.register('form-addplant', {require: 'components/form-addplant/form-addplant' });
	// !#component-insertion-point-above
    console.log("Pages and components registered.");

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
