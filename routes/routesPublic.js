//Service Dependencies


//Public route handling
module.exports = function(router) {

  router.get('/', function(req,res) {
    res.render('index', {title:'Template App'}, function(err, html) {
      if (err) { throw(err); }
      res.send(html);
    });
  });

  /*router.get('/component/request/:componentName', function(req,res) {
    var componentName = req.params.componentName;

    serviceComponents.requestComponent(componentName, function(response) {
      //TODO: check on server to handle fail cases...?
      res.send(response);
    });
  });*/

}