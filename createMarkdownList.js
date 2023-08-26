const fs = require("fs");
const path = require("path");

const iconsDir = path.join(__dirname, "icons");
const iconFiles = fs.readdirSync(iconsDir);

const iconTable = iconFiles
  .filter((file) => file.endsWith(".svg"))
  .map((file) => path.basename(file, ".svg"))
  .map((iconName) => `| ${iconName} | \`<${iconName} />\` |`)
  .join("\n");

const markdownContent = `
# Available Icons

| Icon Name | Usage |
|-----------|-------|
${iconTable}
`;

fs.writeFileSync("icons-list.md", markdownContent, "utf-8");
console.log("Icons list generated successfully!");
