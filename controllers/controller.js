exports.home = (req, res, next) => {
  res.send("<h1>Hello world<h1>");
};

//route    /about
//desc      -----
//private/secure   true/false
exports.aboutRoute = (req, res, next) => {
  res.send("<h1>Howdy<h1>");
};

exports.aboutsRoute = (req, res, next) => {
  res.send("Hello");
};
