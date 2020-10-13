const express = require('express');
const cors = require('cors');

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
exports.coffee = functions.https.onRequest((req, res) => {
    admin.firestore().collection('coffee').doc('bjoern_coffee').update({
        coffee_consumed: admin.firestore.FieldValue.increment(1)
    })
    res.status(200).end();
});