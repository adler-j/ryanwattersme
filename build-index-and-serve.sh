# HUGO BUILD SITE AND JSON SITE INDEX
# Assign pwd to curdir variable
curdir=$(pwd)
# Build Hugo.
hugo
cp ${curdir}/public/json/index.html ${curdir}/static/assets/site-index.json
cd $curdir
# Cleans out Build Directory "Public" if it exists
if [ -d "public" ]; then
	rm -rf public
fi
# Begin Image copy
find ${curdir}/content \( -iname '*.jpg' -o -iname '*.png' -o -iname '*.gif' \) -type f -exec cp -v -- {} ${curdir}/static/assets/images/ \;
# End Image copy
# Open Google Chrome
open -a Google\ Chrome.app http://localhost:1313
hugo server


