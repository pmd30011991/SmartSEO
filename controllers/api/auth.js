
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
var jwtOptions = {}
jwtOptions.secretOrKey = process.env.SESSION_SECRET;
exports.login =  function(req, res) {
    if(req.body.username && req.body.password){
        var username = req.body.username;
        var password = req.body.password;
    
     // usually this would be a database call:
    var user = User.findOne({ email: username.toLowerCase() },function(err, user){
        if(err || !user) {
            return res.status(401).json({message:"User Not found."});
        }
        user.comparePassword(password, (err, isMatch) => {
            if (err) { return done(err); }
            if (isMatch) {
                var payload = {id: user.id};
                var token = jwt.sign(payload, jwtOptions.secretOrKey);
                return res.json({message: "ok", token: token});
            }
            return res.status(401).json({message:"passwords did not match"});
          });
       
    });
} else {
    return res.status(401).json({message:"User Not found."});
}
}

