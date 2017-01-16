define("controller", function() {

  var self = this;

  // LIST PLANTS COMPONENT CONTROLLER
  self.requestFullPlantList = function(_objectRequestingData) {
    console.log('requesting full list of plants');

    var req = new XMLHttpRequest();
    req.open('GET', '/plants/request/all', true);
    req.setRequestHeader('Content-Type', 'application/json');

    req.onreadystatechange = function () {
      if (req.readyState != 4 || req.status != 200) return;
      var resData = JSON.parse(req.responseText);
      if (resData.status === 'success') {
        console.log("success in getting all of the plants in the database");
        console.log(resData);
        console.log(resData.data);
        _objectRequestingData.populatePlantsList(resData.data.arrPlants);
        resData = {};
      } else {
        console.log("failure to get full plant list");
        console.log(resData);
        console.log(resData.data);
      }
    }
    req.send();
  }
  self.requestSpecificPlantDetails = function(_objectRequestingData, _plantId) {
    console.log('requesting specific plant details');

    var req = new XMLHttpRequest();
    req.open('GET', '/plants/request/'+_plantId, true);
    req.setRequestHeader('Content-Type', 'application/json');

    req.onreadystatechange = function () {
      if (req.readyState != 4 || req.status != 200) return;
      var resData = JSON.parse(req.responseText);
      if (resData.status === 'success') {
        console.log("success in getting the specific plant details");
        console.log(resData);
        console.log(resData.data);
        _objectRequestingData.populateSpecificPlantDetails(resData.data[0]);
        resData = {};
      } else {
        console.log("failure to get the specific plant details");
        console.log(resData);
        console.log(resData.data);
      }
    }
    req.send();
  }

  // PANEL - PLANT DETAILS CONTROLLER
  self.requestDeletePlant = function(_objectRequestingData, _plantId) {
    console.log('requesting specific plant details');

    var req = new XMLHttpRequest();
    req.open('GET', '/plants/delete/'+_plantId, true);
    req.setRequestHeader('Content-Type', 'application/json');

    req.onreadystatechange = function () {
      if (req.readyState != 4 || req.status != 200) return;
      var resData = JSON.parse(req.responseText);
      if (resData.status === 'success') {
        console.log("success in deleting a plant");
        console.log(resData);
        console.log(resData.data);
        //_objectRequestingData.populateSpecificPlantDetails(resData.data[0]);
        resData = {};
      } else {
        console.log("failure to delete a plant");
        console.log(resData);
        console.log(resData.data);
      }
    }
    req.send();
  }

  // FORM ADD PLANT COMPONENT CONTROLLER
  self.addPlant = function(_objectRequestingData, _newPlantData) {
    console.log('requesting full list of plants');

    var req = new XMLHttpRequest();
    req.open('POST', '/plants/add/'+_newPlantData.strPlantName, true);
    req.setRequestHeader('Content-Type', 'application/json');

    req.onreadystatechange = function () {
      if (req.readyState != 4 || req.status != 200) return;
      var resData = JSON.parse(req.responseText);
      if (resData.status === 'success') {
        console.log("success in adding new plant");
        console.log(resData);
        console.log(resData.data);
        resData = {};
      } else {
        console.log("failure to add new plant");
        console.log(resData);
        console.log(resData.data);
      }
    }
    req.send( JSON.stringify( { data: _newPlantData } ) );
  }

  // Return this thing...
  return self;

});


/*
self.requestGetNearbyPiles = function(data) {
  var req = new XMLHttpRequest();
  req.open('POST', '/piles/getNearby', true);
  req.setRequestHeader('Content-Type', 'application/json');

  req.onreadystatechange = function () {
    if (req.readyState != 4 || req.status != 200) return;
    var resData = JSON.parse(req.responseText);
    if (resData.status === 'success') {
      app.responseGetNearbyPiles(resData.data);
    }
  }
  req.send( JSON.stringify( { data: (data) } ) );
}
*/