import admin from 'firebase-admin';
const serviceAccountKey = require("../prepinsights-523c5-firebase-adminsdk-7wqhl-4b30957308.json");

export const initializeFirebase = () => {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccountKey),
    });
};

export const getFirebaseAdmin = () => {
    return admin;
};
