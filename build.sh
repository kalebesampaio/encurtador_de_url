// build.sh
#!/usr/bin/env bash
# exit on error
set -o errexit

yarn

yarn build

cp -R ./src/public ./dist 

cp -R ./src/views/ ./dist

yarn typeorm migration:run -d dist/data-source