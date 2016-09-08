// Recommended AMD module pattern for a Knockout component that:
//  - Can be referenced with just a single 'require' declaration
//  - Can be included in a bundle using the r.js optimizer
define(['ko', 'text!./global-header.html'], function(ko, htmlString) {

  function GlobalHeaderVM(params) {
    // Set up properties, etc.
    var self = this;

    // Public Methods
    

    // Placeholder for cleaning up KO subs, cancelling setTimeouts, etc.
    self.Dispose = function() {
    }
  }

  // Return component definition
  return { viewModel: GlobalHeaderVM, template: htmlString };

});