import * as functions from 'firebase-functions'
import * as express from "express";

var app = express.Router();

app.get('/', function (req, res) {
    res.send("Send your response");
});

// Expose following end points using functions
exports.api = functions.https.onRequest(app);