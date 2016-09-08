//Service Dependencies
var auth = require('../app/services/serviceAuth.js');

//Authentication route handling
module.exports = function(router) {

  router.use(function(req,res,next) {
    auth.userCookieAuth(req, function(response) {
      console.log('-----------------------');
      console.log(req.app_user_session);
      next();
    });
  });

}