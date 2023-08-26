const fs = require("fs");
const path = require("path");

const iconsDirectory = path.join(__dirname, "icons");

fs.readdirSync(iconsDirectory).forEach((iconFilename) => {
  if (iconFilename.includes("-")) {
    const newIconFilename = iconFilename.replace(/-/g, "_");
    const oldPath = path.join(iconsDirectory, iconFilename);
    const newPath = path.join(iconsDirectory, newIconFilename);
    fs.renameSync(oldPath, newPath);
  }
});
