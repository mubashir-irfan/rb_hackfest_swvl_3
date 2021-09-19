var admin = require("firebase-admin");

var serviceAccount = require("./swvl3-priv-key.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://swvl3-99fe5-default-rtdb.firebaseio.com",
  });
}

export function getDB() {
  return admin.database();
}
