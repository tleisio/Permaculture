define("router", function() {

  var self = this;

  self.siteUrl = "http://localhost:3000";

  // Methods
  self.changePage = function() {
    //Check for valid deeplink
    var pageUrl, deepLink;
    pageUrl = window.location.href;
    deepLink = pageUrl.substr(self.siteUrl.length);
    console.log(deepLink);

    switch(deepLink) {
        case '/':
            return 'home';
            break;
        case '/#':
            return 'home';
            break;
        case '/#!':
            return 'home';
            break;
        case '/#!/':
            return 'home';
            break;
        case '/#!/process':
            return 'process';
            break;
        default:
            return '404';
    }
  }

  // Return this thing...
  return self;

});