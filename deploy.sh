#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

以下擇一
# if you are deploying to https://< github使用者名稱>.github.io
# git push -f git@github.com:< github使用者名稱>/< github使用者名稱>.github.io.git main

# if you are deploying to https://<github使用者名稱>.github.io/<REPO檔名> (建議使用)
git push -f git@github.com:yehHsieh/VueHw6.git main:gh-pages 

cd -
