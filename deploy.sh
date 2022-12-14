#!/usr/bin/env sh

# abort on errors
set -e

pnpm build

cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

 git push -f git@github.com:Efrice/Efrice.github.io.git master:gh-pages

cd -