const fs = require("fs");
const path = require("path");
let currentPath = path.join(__dirname);
module.exports.bootstrap = function () {
  fs.readdir(currentPath, (err, files) => {
    files.forEach((file) => {
      if (file !== "index.js") {
        let broker = fileBroker(file);
        global[broker[0]] = require(`./${file}`);
      }
    });
  });
};

// hoisted function
const fileBroker = (filename) => {
  return filename.split(".");
};
