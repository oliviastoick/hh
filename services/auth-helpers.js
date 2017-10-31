const bcrypt = require('bcryptjs');

function comparePass(userPassword, dbPassword) {
  return bcrypt.compareSync(userPassword, dbPassword);
}

function loginRedirect(req, res, next) {
  if (req.user) return res.redirect('/user');
  return next();
}

function loginRequired(req, res, next) {
  if (!req.user) return res.redirect('/auth/login');
  return next();
}

module.exports = {
  comparePass: comparePass,
  loginRedirect: loginRedirect,
  loginRequired: loginRequired,
}
