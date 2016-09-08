// Recommended AMD module pattern for a Knockout component that:
//  - Can be referenced with just a single 'require' declaration
//  - Can be included in a bundle using the r.js optimizer
define(['ko', 'text!./form-signin.html'], function(ko, htmlString) {

  function FormSigninVM(params) {
    // Set up properties, etc.
    var self = this;

    self.strUsername = ko.observable('');
    self.strPassword = ko.observable('');

    self.isValidating = ko.observable(false);
    self.isValid = ko.observable(false);

    // Public Methods
    self.SignIn = function() {
      console.log(self.strUsername(), self.strPassword());
    }

    // Placeholder for cleaning up KO subs, cancelling setTimeouts, etc.
    self.Dispose = function() {
      
    }
  }

  // Return component definition
  return { viewModel: FormSigninVM, template: htmlString };

});