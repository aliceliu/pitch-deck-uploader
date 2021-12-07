# pitch-deck-uploader

Instructions for Ubuntu 20

Installations
1) sudo apt remove cmdtest
2) sudo apt remove yarn
3) curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
4) echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
5) sudo apt update
6) sudo apt install nodejs
7) sudo apt install npm
8) sudo apt install yarn
9) git clone https://github.com/aliceliu/pitch-deck-uploader.git

Running the server
1) cd pitch-deck-uploader/server
2) yarn install
3) node index.js

Running the client
1) cd pitch-deck-uploader/client
2) yarn install
3) yarn start
4) open http://localhost:3000

