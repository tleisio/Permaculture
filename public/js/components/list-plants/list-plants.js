// Recommended AMD module pattern for a Knockout component that:
//  - Can be referenced with just a single 'require' declaration
//  - Can be included in a bundle using the r.js optimizer
define(['ko', 'text!./list-plants.html', 'controller'], function(ko, htmlString, controller) {

  function ListPlantsVM(params) {
    // Set up properties, etc.
    var self = this;

    self.arrPlants = ko.observableArray([]);
    self.isAddPlantVisible = params.isAddPlantVisible; // parent property passed in via params
    self.isPlantSelected = params.isPlantSelected;
    self.objSelectedPlant = params.objSelectedPlant;

    // Init
    console.log("list plants should call the DB for the list of plants right about now...");
    controller.requestFullPlantList(self);

    // Public Methods
    self.populatePlantsList = function(arrPlantList) {
      var i,ll;
      var tempArr = [];

      ll=arrPlantList.length;
      for (i=0;i<ll;i++) {
        var tempPlant = {};
        tempPlant.strCommonName = arrPlantList[i].local.strCommonName;
        tempPlant.strScientificName = arrPlantList[i].local.strScientificName;
        tempPlant.strId = arrPlantList[i]._id;
        tempPlant.isSelected = ko.observable(false);
        tempArr.push(tempPlant);
      }
      self.arrPlants(tempArr);
    }

    self.selectPlant = function(data,event) {
      var i,ll;
      ll=self.arrPlants().length;
      for (i=0;i<ll;i++) {
        self.arrPlants()[i].isSelected(false);
      }
      data.isSelected(true);

      controller.requestSpecificPlantDetails(self, data.strId);
    }

    self.populateSpecificPlantDetails = function(plantData) {
      console.log(plantData);
      var tempObjSelectedPlant = {};
      tempObjSelectedPlant.strId = plantData._id;
      tempObjSelectedPlant.strCommonName = plantData.local.strCommonName;
      tempObjSelectedPlant.strGenus = plantData.local.strGenus;
      tempObjSelectedPlant.strEpithet = plantData.local.strEpithet;
      tempObjSelectedPlant.datLastEditedOn = plantData.local.datLastEditedOn;
      tempObjSelectedPlant.strEcosystemSuccession = plantData.local.strEcosystemSuccession;

      self.objSelectedPlant(tempObjSelectedPlant);
      self.isPlantSelected(true);
    }

    self.addPlant = function(data,event) {
      // Call the create plant component
      if (self.isAddPlantVisible() == false) {
        self.isAddPlantVisible(true);
      }
    }

    self.importPlants = function(data,event) {

    }

    // Placeholder for cleaning up KO subs, cancelling setTimeouts, etc.
    self.Dispose = function() {
    }
  }

  // Return component definition
  return { viewModel: ListPlantsVM, template: htmlString };

});