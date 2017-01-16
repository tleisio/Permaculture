// Recommended AMD module pattern for a Knockout component that:
//  - Can be referenced with just a single 'require' declaration
//  - Can be included in a bundle using the r.js optimizer
define(['ko', 'text!./panel-plantdetails.html', 'controller'], function(ko, htmlString, controller) {

  function PanelPlantdetailsVM(params) {
    // Set up properties, etc.
    var self = this;

    self.isPlantSelected = params.isPlantSelected;
    self.objSelectedPlant = params.objSelectedPlant;

    // Public Methods
    self.deletePlant = function(data,event) {
      console.log("DELETING::::");
      console.log(self.objSelectedPlant().strId);
      controller.requestDeletePlant(self, self.objSelectedPlant().strId);
    }

    // Placeholder for cleaning up KO subs, cancelling setTimeouts, etc.
    self.Dispose = function() {
    }
  }

  // Return component definition
  return { viewModel: PanelPlantdetailsVM, template: htmlString };

});