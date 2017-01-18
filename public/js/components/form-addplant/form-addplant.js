// Recommended AMD module pattern for a Knockout component that:
//  - Can be referenced with just a single 'require' declaration
//  - Can be included in a bundle using the r.js optimizer
define(['ko', 'text!./form-addplant.html', 'controller'], function(ko, htmlString, controller) {

  function FormAddplantVM(params) {
    // Set up properties, etc.
    var self = this;

    self.isAddPlantVisible = params.isAddPlantVisible; // parent property passed in via params

    // USDA Fields
    self.strCommonName = ko.observable('');
    self.strScientificName = ko.observable('');
    self.strGrowthHabit = ko.observable('');
    self.arrActiveGrowthPeriod = ko.observableArray([]);
    self.isFireResistant = ko.observable(false);
    self.strGrowthForm = ko.observable('');
    self.strGrowthRate = ko.observable('');
    self.intHeightAtBaseAgeMax = ko.observable(-1); //ft
    self.intHeightAtMaturity = ko.observable(-1); //ft
    self.strLifespan = ko.observable('');
    self.strNitrogenFixation = ko.observable('');
    self.strShapeAndOrientation = ko.observable('');
    self.isAdaptedToCoarseTexturedSoils = ko.observable(false);
    self.isAdaptedToMediumTexturedSoils = ko.observable(false);
    self.isAdaptedToFineTexturedSoils = ko.observable(false);
    self.strMoistureUse = ko.observable('');
    self.intPrecipitationMin = ko.observable(-1);
    self.intPrecipitationMax = ko.observable(-1);
    self.intRootDepthMin = ko.observable(-1);
    self.strShadeTolerance = ko.observable('');
    self.intTemperatureMin = ko.observable(-1);
    self.strBloomPeriod = ko.observable('');
    self.strFruitSeedPeriodBegin = ko.observable('');
    self.strFruitSeedPeriodEnd = ko.observable('');

    // Avila (custom) fields
    self.strEcosystemSuccession = ko.observable('');
    self.arrAlsoKnownAs = ko.observableArray([]);
    self.strTempArrAlsoKnownAsItem = ko.observable('');
    self.datLastEditedOn = ko.observable();
    self.intBloomPeriodMonthBegin = ko.observable(-1);
    self.intBloomPeriodMonthEnd = ko.observable(-1);
    
    // UI bindings
    self.isPlantNameSelected = ko.observable(true);

    // Public Methods
    self.addPlant = function(data,event) {
      var newPlantData = {};

      // USDA fields
      newPlantData.strCommonName = self.strCommonName();
      newPlantData.strScientificName = self.strScientificName();
      newPlantData.strGrowthHabit = self.strGrowthHabit();
      newPlantData.arrActiveGrowthPeriod = self.arrActiveGrowthPeriod();
      newPlantData.isFireResistant = self.isFireResistant();
      newPlantData.strGrowthForm = self.strGrowthForm();
      newPlantData.strGrowthRate = self.strGrowthRate();
      newPlantData.intHeightAtBaseAgeMax = self.intHeightAtBaseAgeMax();
      newPlantData.intHeightAtMaturity = self.intHeightAtMaturity();
      newPlantData.strLifespan = self.strLifespan();
      newPlantData.strNitrogenFixation = self.strNitrogenFixation();
      newPlantData.strShapeAndOrientation = self.strShapeAndOrientation();
      newPlantData.isAdaptedToCoarseTexturedSoils = self.isAdaptedToCoarseTexturedSoils();
      newPlantData.isAdaptedToMediumTexturedSoils = self.isAdaptedToMediumTexturedSoils();
      newPlantData.isAdaptedToFineTexturedSoils = self.isAdaptedToFineTexturedSoils();
      newPlantData.strMoistureUse = self.strMoistureUse();
      newPlantData.intPrecipitationMin = self.intPrecipitationMin();
      newPlantData.intPrecipitationMax = self.intPrecipitationMax();
      newPlantData.intRootDepthMin = self.intRootDepthMin();
      newPlantData.strShadeTolerance = self.strShadeTolerance();
      newPlantData.intTemperatureMin = self.intTemperatureMin();
      newPlantData.strBloomPeriod = self.strBloomPeriod();
      newPlantData.strFruitSeedPeriodBegin = self.strFruitSeedPeriodBegin();
      newPlantData.strFruitSeedPeriodEnd = self.strFruitSeedPeriodEnd();

      // Avila (custom) fields
      newPlantData.strEcosystemSuccession = self.strEcosystemSuccession();
      newPlantData.arrAlsoKnownAs = self.arrAlsoKnownAs();
      newPlantData.datLastEditedOn = self.datLastEditedOn();
      newPlantData.intBloomPeriodMonthBegin = self.intBloomPeriodMonthBegin();
      newPlantData.intBloomPeriodMonthEnd = self.intBloomPeriodMonthEnd();

      controller.addPlant(self, newPlantData);
    }

    self.addAlsoKnownAsName = function(data,event) {
      self.arrAlsoKnownAs().push(self.strTempArrAlsoKnownAsItem());
    }
    self.removeAlsoKnownAsName = function(data,event) {
      self.arrAlsoKnownAs().remove(data);
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