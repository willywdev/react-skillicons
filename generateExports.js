const fs = require("fs");
const path = require("path");

const iconsDirectory = path.join(__dirname, "icons");
const icons = fs.readdirSync(iconsDirectory);

const exportStatements = icons.map((iconFilename) => {
  const iconName = path.basename(iconFilename, path.extname(iconFilename));
  return `export { default as ${iconName} } from './icons/${iconFilename}';`;
});

const exportCode = exportStatements.join("\n");

fs.writeFileSync("index.js", exportCode);
