nvm install updated v
nvm use updated v
npm i --save-dev babel-cli babel-preset-env babel-preset-stage-0


Then change package.json file
added: "start": "nodemon ./index.js --exec babel-node -e js", under script section


