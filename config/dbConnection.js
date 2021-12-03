const { connect } = require("mongoose");
const chalk = require("chalk");
module.exports.connect = async () => {
  try {
    let url =
      process.env.NODE_ENV === "production" ? "" : "mongodb://127.0.0.1:27017";
    let dbName = "App";
    await connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName,
    });
    console.log(chalk.blueBright("Database connected"));
  } catch (e) {
    throw new Error(chalk.red("Database connection error ", e));
  }
};
