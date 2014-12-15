node-webkit-express
===================

allows to start a nodejs express server inside node-webkit.

to use (tested on linux [ubuntu && fedora] only):

    git clone git@github.com/jaeh/node-webkit-express
    cd node-webkit-express && npm install
    npm install nodewebkit
    npm start

nodewebkit install is separated because the package may already be installed globally on your system.

do NOT overwrite package.json, app.js and index.html
