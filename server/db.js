const firebase = require('firebase');
const config = require('./confjg');

const db = firebase.initializeApp(config.firebaseConfig);

module.exports = db;
//comment
