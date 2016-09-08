//module dependencies
var mongoose = require('mongoose');

//schema
var templateModelSchema = mongoose.Schema({
  local: {
    stringField: { type:String },
    arrayWithNumbersField: { type:[Number] },
    dateField: { type:Date },
  }
});

//schema methods
templateModelSchema.methods.genericMethod = function(data) {
  //return bcrypt.hashSync(password, bSalt);
}

//private helper methods
function randomString(length, chars) {
    var mask = '';
    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1) mask += '0123456789';
    if (chars.indexOf('!') > -1) mask += '~!@#$%^&*()_+-={}[]<>?|';
    var result = '';
    for (var i = length; i > 0; --i) result += mask[Math.round(Math.random() * (mask.length - 1))];
    return result;
}

//make public
module.exports = mongoose.model('TemplateModel', templateModelSchema);