const jwt = require("jsonwebtoken");

module.exports = function sendJWT(ctx, user) {
  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

  ctx.response.cookie("token", token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7 * 52,
    domain:
      process.env.NODE_ENV === "development"
        ? process.env.LOCAL_DOMAIN
        : process.env.APP_DOMAIN,
    secure: process.env.NODE_ENV === "development" ? false : true
  });
};
