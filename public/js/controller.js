define("controller", function() {

  var self = this;

  // Methods
  self.requestComponent = function(_componentName) {
    console.log('requesting component: ' + _componentName);

    var req = new XMLHttpRequest();
    req.open('GET', '/component/request/'+_componentName, true);
    req.setRequestHeader('Content-Type', 'application/json');

    req.onreadystatechange = function () {
      if (req.readyState != 4 || req.status != 200) return;
      var resData = JSON.parse(req.responseText);
      if (resData.status === 'success') {
        console.log("success in getting component");
        console.log(resData);
        console.log(resData.data);
      } else {
        console.log("failure to get component");
        console.log(resData);
        console.log(resData.data);
      }
    }
    req.send();
  }

  // Return this thing...
  return self;

});