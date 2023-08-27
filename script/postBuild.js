const fs = require("fs-extra")
const path = require("path")
const shell = require("shelljs")

const currentDistDir = path.resolve(__dirname, "../dist")
const targetDistDir = path.resolve(__dirname, "../../LeetCode-JavaScript-gh-pages")
fs.copySync(currentDistDir, targetDistDir)

if (new Date().getDay() === 0) {
  shell.cd(targetDistDir)
  shell.exec("git add .")
  shell.exec("git commit -m deploy")
  shell.exec("git push")
}
