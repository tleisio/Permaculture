//module dependencies
var mongoose = require('mongoose');

//schema
var plantModelSchema = mongoose.Schema({
  local: {
    // USDA Fields
    strCommonName: { type:String },
    strScientificName: { type:String },
    strGrowthHabit: { type:String },
    arrActiveGrowthPeriod: { type:[String] },
    isFireResistant: { type:Boolean },
    strGrowthForm: { type:String },
    strGrowthRate: { type:String },
    intHeightAtBaseAgeMax: { type:Number }, // Feet
    intHeightAtMaturity: { type:Number }, // Feet
    strLifespan: { type:String },
    strNitrogenFixation: { type:String },
    strShapeAndOrientation: { type:String },
    isAdaptedToCoarseTexturedSoils: { type:Boolean },
    isAdaptedToMediumTexturedSoils: { type:Boolean },
    isAdaptedToFineTexturedSoils: { type:Boolean },
    strMoistureUse: { type:String },
    intPrecipitationMin: { type:Number },
    intPrecipitationMax: { type:Number },
    intRootDepthMin: { type:Number },
    strShadeTolerance: { type:String },
    intTemperatureMin: { type:Number },
    strBloomPeriod: { type:String },
    strFruitSeedPeriodBegin: { type:String },
    strFruitSeedPeriodEnd: { type:String },
    // Avila (custom) fields
    strEcosystemSuccession: { type:String },
    arrAlsoKnownAs: { type:[String] },
    datLastEditedOn: { type:Date },
    intBloomPeriodMonthBegin: { type:Number },
    intBloomPeriodMonthEnd: { type:Number }
  }
});

//schema methods
plantModelSchema.methods.genericMethod = function(data) {
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
module.exports = mongoose.model('PlantModel', plantModelSchema);