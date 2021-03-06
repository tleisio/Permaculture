//models dependencies
var Plant = require('../models/plantModel.js');

//make public
var servicePlants = module.exports;

//cross-service dependencies

//private
var somePrivateVar = "";

//public
servicePlants.request = function(_plantId, _callback) {
  var res = {};

  // TODO: only return plant names, not all the data all at once...

  if (_plantId === "all") {
    Plant.find(function (err, plants) {
      if (err) return console.error(err);
      console.log(plants);
      res.status = 'success';
      res.message = 'Successfully got all of the plants from the db.';
      res.data = { arrPlants: plants };
      _callback(res);
    });
  } else {
    Plant.find({ _id: _plantId }, function(err, plant) {
      if (err) return console.error(err);
      console.log(plant);
      res.status = 'success';
      res.message = 'Successfully got the specific plant from the db.';
      res.data = plant;
      _callback(res);
    });
  }
  
}

servicePlants.addPlant = function(_plantData, _callback) {
  var res = {};

  // TODO: unique name validation

  console.log("ADDING NEW PLANT NAMED: " + _plantData.strCommonName);
  console.log(_plantData);

  var newPlant = new Plant(
    {
      // USDA Fields
      'local.strCommonName': _plantData.strCommonName,
      'local.strScientificName': _plantData.strScientificName,
      'local.strGrowthHabit': _plantData.strGrowthHabit,
      'local.arrActiveGrowthPeriod': _plantData.arrActiveGrowthPeriod,
      'local.isFireResistant': _plantData.isFireResistant,
      'local.strGrowthForm': _plantData.strGrowthForm,
      'local.strGrowthRate': _plantData.strGrowthRate,
      'local.intHeightAtBaseAgeMax': _plantData.intHeightAtBaseAgeMax, // Feet
      'local.intHeightAtMaturity': _plantData.intHeightAtMaturity, // Feet
      'local.strLifespan': _plantData.strLifespan,
      'local.strNitrogenFixation': _plantData.strNitrogenFixation,
      'local.strShapeAndOrientation': _plantData.strShapeAndOrientation,
      'local.isAdaptedToCoarseTexturedSoils': _plantData.isAdaptedToCoarseTexturedSoils,
      'local.isAdaptedToMediumTexturedSoils': _plantData.isAdaptedToMediumTexturedSoils,
      'local.isAdaptedToFineTexturedSoils': _plantData.isAdaptedToFineTexturedSoils,
      'local.strMoistureUse': _plantData.strMoistureUse,
      'local.intPrecipitationMin': _plantData.intPrecipitationMin,
      'local.intPrecipitationMax': _plantData.intPrecipitationMax,
      'local.intRootDepthMin': _plantData.intRootDepthMin,
      'local.strShadeTolerance': _plantData.strShadeTolerance,
      'local.intTemperatureMin': _plantData.intTemperatureMin,
      'local.strBloomPeriod': _plantData.strBloomPeriod,
      'local.strFruitSeedPeriodBegin': _plantData.strFruitSeedPeriodBegin,
      'local.strFruitSeedPeriodEnd': _plantData.strFruitSeedPeriodEnd,
      // Avila (custom) fields
      'local.strEcosystemSuccession': _plantData.strEcosystemSuccession,
      'local.arrAlsoKnownAs': _plantData.arrAlsoKnownAs,
      'local.intBloomPeriodMonthBegin': _plantData.intBloomPeriodMonthBegin,
      'local.intBloomPeriodMonthEnd': _plantData.intBloomPeriodMonthEnd,
      'local.datLastEditedOn': Date()
    }
  );

  newPlant.save(function (err, returnedEntry) {
    if (err) return console.error(err);
    console.log("success in saving new plant");
    console.log(returnedEntry);
    res.status = 'success';
    res.message = 'Successfully added new plant!';
    res.data = {};
    _callback(res);
  });
}

servicePlants.deletePlant = function(_plantId, _callback) {
  var res = {};

  Plant.findByIdAndRemove(_plantId, function (err, returnedEntry) {
    if (err) return console.error(err);
    console.log("success in deleting the plant");
    console.log(returnedEntry);
    res.status = 'success';
    res.message = 'Successfully deleted the plant!';
    res.data = {};
    _callback(res);
  });
}

/*servicePlants.someMethod = function(_param1, _param2) {
  var res = {};
  res.status = 'success';
  res.message = 'Successfully got stuff.';
  res.data = {};
  
  _callback(res);
}*/

//private method
function privateMethods(_param1, _param2, _param3) {  
}