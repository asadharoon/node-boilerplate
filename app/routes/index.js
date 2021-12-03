const fs = require("fs");
const path = require("path");
let currentPath = path.join(__dirname);

module.exports = function (app) {
  fs.readdir(currentPath, (err, files) => {
    files.forEach((file) => {
      if (file !== "index.js") {
        let route = require(`./${file}`);
        app.use(route.basePath, route.router);
      }
    });
  });
};
