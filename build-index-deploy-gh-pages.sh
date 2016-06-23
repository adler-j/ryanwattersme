# HUGO BUILD SITE AND JSON SITE INDEX
# For the blog, this alias is currently set to "blog" in bash
# Assign pwd to curdir variable
curdir=$(pwd)
TODAY=$(date)
# Begin Image Copy
find ${curdir}/content \( -iname '*.jpg' -o -iname '*.png' -o -iname '*.gif' \) -type f -exec cp -v -- {} ${curdir}/static/assets/images/ \;
# Build Hugo.
hugo --ignoreCache
cp ${curdir}/public/json/index.html ${curdir}/public/assets/site-index.json
rm -rf ${curdir}/public/json
cd $curdir

yes | cp -rf public/* ~/Desktop/GitHub/rdwatters.github.io
rm -rf public
cd ~/Desktop/GitHub/rdwatters.github.io
echo "Deployment: $TODAY" >> deploy.txt
# Push changes to GH Pages Repo
git add .
git commit -m "$1"
git push



