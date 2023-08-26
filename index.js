// --- Icons are created by tandpfun on Github: https://github.com/tandpfun/skill-icons --- \\
// --- Also check out his profile: https://github.com/tandpfun ---------------------------- \\
// Create a context to import all SVG files in the "icons" folder
const iconContext = require.context("./icons", false, /\.svg$/);

// Dynamically generate and export icon functions
iconContext.keys().forEach((filePath) => {
  const iconName = filePath.replace("./", "").replace(".svg", "");
  const iconContent = iconContext(filePath).default;
  exports[iconName] = () => iconContent;
});
