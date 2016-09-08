//models dependencies

//make public
var serviceName = module.exports;

//cross-service dependencies

//private
var somePrivateVar = "";

//public
serviceName.somePublicMethod = function(_param1, _param2) {
  var res = {};
  res.status = 'success';
  res.message = 'Successfully got the full article.';
  res.data = {};
  
  _callback(res);
}


//private method
function privateMethods(_param1, _param2, _param3) {  
}