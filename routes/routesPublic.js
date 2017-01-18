//Service Dependencies
var servicePlants = require('../app/services/servicePlants');

//Public route handling
module.exports = function(router) {

  router.get('/', function(req,res) {
    res.render('index', {title:'Template App'}, function(err, html) {
      if (err) { throw(err); }
      res.send(html);
    });
  });

  router.get('/plants/request/:plantId', function(req,res) {
    var plantId = req.params.plantId;
   
    servicePlants.request(plantId, function(response) {
      res.send(response);
    });
  });

  router.get('/plants/delete/:plantId', function(req,res) {
    var plantId = req.params.plantId;
   
    servicePlants.deletePlant(plantId, function(response) {
      res.send(response);
    });
  });

  router.post('/plants/add/:plantName', function(req,res) {
    var plantName = req.params.plantName;
    var plantData = req.body.data;

    console.log("ROUTER DATA:: ");
    console.log(plantData);

    servicePlants.addPlant(plantData, function(response) {
      res.send(response);
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