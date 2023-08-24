const fs = require("fs")
const path = require("path")

const problemsPath = path.resolve(__dirname, "../docs/problems")
const configPath = path.resolve(__dirname, "../docs/.vitepress/config.js")
const files = fs
  .readdirSync(problemsPath)
  .sort((a, b) => a.split(".")[0] - b.split(".")[0])
const sidebarItems = files.map(
  (item) =>
    `{ text: "${item
      .replace(".md", "")
      .replaceAll(" ", "")}", link: "/problems/${item
      .replace(".md", "")
      .replaceAll(" ", "")}" }`
)
const config = fs.readFileSync(configPath, "utf8")
const newConfig = config.replace(
  /items:\s\[([\W\w]+)\]/,
  `items: [\n\t\t\t\t\t${sidebarItems.join(',\n\t\t\t\t\t')}\n\t\t\t\t],\n\t\t\t},\n\t\t]`
)
fs.writeFileSync(configPath, newConfig, "utf8")
