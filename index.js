const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const path = require('path');
// Importing a MongoDB connecting file
const connectDB=require('./mongoDb/connectDb');

require('dotenv').config();
connectDB();

// Import route files
const upload=require('./routes/upload');

app.use(bodyParser.json());
app.use(express.json({ extended:false}));

// Configuiring simple express routes
// getDir() function is used here along with package.json.pkg.assets
app.use('/', express.static(getDir() + '/views'));
app.use('/fc', upload);

app.get('/', function(req, res) {
    res.sendFile(getDir() + '/views/index.html');
});

// Using a function to set default app path
function getDir() {
    if (process.pkg) {
        return path.resolve(process.execPath + "/..");
    } else {
        return path.join(require.main ? require.main.path : process.cwd());
    }
}

// Setting up our port
const port=process.env.PORT;

app.listen(port, () => console.log("Server started at 5000"));

module.exports=app;  
