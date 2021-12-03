module.exports.bootstrap = (app) => {
  require("./config/dbConnection").connect();
  require("./app/helpers/index").bootstrap();
  require("./app/routes/index").call(this, app);
};
