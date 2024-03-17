# Create a new app
**Step-1: Install Node**
    Create a folder. Change Directory to the newly created folder and initialize a node project.

```bash
mkdir myapp1
cd myapp1
npm init -y
```

**Step-2: Install Dependencies**
Install below dependencies as well
```bash
npm i express ejs idb-pconnector  # required packages 
```

**Step-3: Create your first node app**
- `touch express.js` to create a new JS file called server
- Paste the below code in the new file

```js
const express = require("express"); // invoke the package to the constant express

const app = express(); // assign the package function to the constant app

port = 7592; // assign port# to the app

app.listen(port, function(){ // the listen method takes two params. 1) Port#, 2) the actual funcion it does when called
    console.log("successfully started a node.js instance!");
});

app.get('/', function(req, res){
    res.send("Hello world!");
});

```
**Step-4: Install nodemon to auto restart the node server**
```bash
npm i -D nodemon # used to restart the node server whenever we make code change in server.js
```
Once installed, go to the packages.json and check the below entry is found at the bottom
```json
  "devDependencies": {
    "nodemon": "^3.1.0"
  }
```
If yes, then add an entry in the scripts section as below
```json
"scripts": {
    "dev": "nodemon server.js"
  }
```
The above key value pair means, whenever I run the script named dev, the `nodemon server.js` command would be executed. Thus ensuring restarting of node js server whenever a change is detected!

https://youtu.be/TYUK2TsxQjc?t=937
