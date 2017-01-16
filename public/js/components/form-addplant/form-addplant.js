// Recommended AMD module pattern for a Knockout component that:
//  - Can be referenced with just a single 'require' declaration
//  - Can be included in a bundle using the r.js optimizer
define(['ko', 'text!./form-addplant.html', 'controller'], function(ko, htmlString, controller) {

  function FormAddplantVM(params) {
    // Set up properties, etc.
    var self = this;

    self.isAddPlantVisible = params.isAddPlantVisible; // parent property passed in via params

    self.strCommonName = ko.observable('');
    self.strGenus = ko.observable('');
    self.strEpithet = ko.observable('');
    self.strEcosystemSuccession = ko.observable('');

    self.isPlantNameSelected = ko.observable(true);

    // Public Methods
    self.addPlant = function(data,event) {
      var newPlantData = {};
      newPlantData.strCommonName = self.strCommonName();
      newPlantData.strGenus = self.strGenus();
      newPlantData.strEpithet = self.strEpithet();
      newPlantData.strEcosystemSuccession = self.strEcosystemSuccession();

      controller.addPlant(self, newPlantData);
    }

    self.close = function(data,event) {
      self.isAddPlantVisible(false);
      self.Dispose();
    }

    // Placeholder for cleaning up KO subs, cancelling setTimeouts, etc.
    self.Dispose = function() {
      console.log("Todo: figure out dispose functionality to keep the DOM monster away.");
    }
  }

  // Return component definition
  return { viewModel: FormAddplantVM, template: htmlString };

});