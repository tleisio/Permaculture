// Recommended AMD module pattern for a Knockout component that:
//  - Can be referenced with just a single 'require' declaration
//  - Can be included in a bundle using the r.js optimizer
define(['ko', 'text!./page-proto.html'], function(ko, htmlString) {

  function PageProtoVM(params) {
    // Set up properties, etc.
    var self = this;

    //self.arrAutoComplete = ko.observableArray([]);

    self.isAddPlantVisible = ko.observable(false);
    self.isPlantSelected = ko.observable(false);
    self.objSelectedPlant = ko.observable({});

    // Public Methods
    /*self.searchAutoComplete = function(data,event) {
      var i,ll;
      var tempArr = [];
      var pattern = self.strSearch().toLowerCase() + event.key.toLowerCase();

      self.arrAutoComplete([]);

      ll=testData.arrTrees.length;
      for (i=0; i<ll; i++) {
        var indexFound = testData.arrTrees[i].strNameCommon.toLowerCase().indexOf(pattern);

        console.log(testData.arrTrees[i].strNameCommon);
        console.log(pattern);

        if (indexFound != -1) {
          tempArr.push(testData.arrTrees[i].strNameCommon);
        }
      }
      self.arrAutoComplete(tempArr);

      return true;
    }*/

    // Placeholder for cleaning up KO subs, cancelling setTimeouts, etc.
    self.Dispose = function() {
    }
  }

  // Return component definition
  return { viewModel: PageProtoVM, template: htmlString };

});