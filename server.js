const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const chalk = require("chalk");
require("./bootstrapApp").bootstrap(app);

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(chalk.green(`\nServer is listening to port ${PORT}`));
});
