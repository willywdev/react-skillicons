const fs = require("fs");
const path = require("path");

const iconsDir = path.join(__dirname, "icons");
const outputPath = path.join(__dirname, "index.jsx");

const iconFiles = fs
  .readdirSync(iconsDir)
  .filter((file) => file.endsWith(".svg"));

const importStatements = iconFiles
  .map((file, index) => {
    const iconName = file.replace(".svg", "");
    return `import ${iconName}Icon from "./icons/${file}";`;
  })
  .join("\n");

const iconComponents = iconFiles
  .map((file, index) => {
    const iconName = file.replace(".svg", "");
    return `export function ${iconName}( {className} ) {
  return <img src={${iconName}Icon} alt="${iconName}" className={className}></img>;
}`;
  })
  .join("\n\n");

const outputContent = `${importStatements}\n\n${iconComponents}`;

fs.writeFileSync(outputPath, outputContent);

console.log("index.jsx generated successfully.");
