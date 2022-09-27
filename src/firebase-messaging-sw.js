// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyA18Gu3Bakwkja2uGVibOaU26sBMM2Wq6o",
  authDomain: "ee-mis-system.firebaseapp.com",
  projectId: "ee-mis-system",
  storageBucket: "ee-mis-system.appspot.com",
  messagingSenderId: "421164930113",
  appId: "1:421164930113:web:9e82d5013d2b5bfbe222c0"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});