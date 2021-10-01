const firebase = require('../server/db');
const Customers = require('../models/customers');
const firestore = firebase.firestore();

const addCustomer = async (req, res, next) => {
  try {
    const data = req.body;
    await firestore.collection('customers').doc().set(data);
    res.send('Record saved successfully!');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.export = {
  addCustomer,
};
