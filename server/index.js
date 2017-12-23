const express = require('express');
const bodyParser = require('body-parser');
const mc = require(__dirname + `/controllers/messages_controllers`);

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + `/../public/build`));

const baseURL = "/api/messages";
app.post(baseURL, mc.create);
app.get(baseURL, mc.read);
app.put(`${baseURL}/:id`, mc.update);
app.delete(`${baseURL}/:id`, mc.delete);

const port = 3000;
app.listen (port, () => {console.log(`Welcome to the big show on port ${port}!`);});