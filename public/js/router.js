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
        case '/#!/page1':
            return 'page1';
            break;
        case '/#!/page2':
            return 'page2';
            break;
        default:
            return '404';
    }
  }

  // Return this thing...
  return self;

});