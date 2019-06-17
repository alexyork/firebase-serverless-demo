const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send('Hello from a Firebase Cloud Function!');
});

/*
exports.onStuffAdded = functions.database.ref('/stuff/{id}').onCreate((snapshot, context) => {
  const data = snapshot.val();

  return admin.database().ref('/stuff-from-server').push({
    message: 'Server trigger!',
    date: new Date().toString(),
    theData: data
  });
});
*/