const fs = require("fs-extra")
const path = require("path")
const shell = require("shelljs")

const currentDistDir = path.resolve(__dirname, "../dist")
const targetDistDir = path.resolve(__dirname, "../../efrice-gh-pages")
fs.copySync(currentDistDir, targetDistDir)

const currentProblemsDir = path.resolve(__dirname, "../docs/problems")
const targetProblemsDir = path.resolve(
  __dirname,
  "../../LeetCode-JavaScript/problems"
)
fs.copySync(currentProblemsDir, targetProblemsDir)

if (new Date().getDay() === 7) {
  shell.cd(targetDistDir)
  shell.exec("git add .")
  shell.exec("git commit -m deploy")
  shell.exec("git push")
}
