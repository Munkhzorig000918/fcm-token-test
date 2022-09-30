import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";



const firebaseConfig = {
  apiKey: "AIzaSyA18Gu3Bakwkja2uGVibOaU26sBMM2Wq6o",
  authDomain: "ee-mis-system.firebaseapp.com",
  projectId: "ee-mis-system",
  storageBucket: "ee-mis-system.appspot.com",
  messagingSenderId: "421164930113",
  appId: "1:421164930113:web:9e82d5013d2b5bfbe222c0",
  measurementId: "G-1TBLZQ952V"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);


function requestPermission() {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
    }
  })
}

export const getForToken = () => getToken(messaging, { vapidKey: 'BDd_4M1uYL0OoJw8xRpmeUhD88rAzRwngrr4xXkwSlyRW8J3nWiDPwb-jcv0FYhUNgzu8MNMcCvqwWpr00CnHCc' }).then((currentToken) => {
  if (currentToken) {
    console.log("currentToken")
    console.log(currentToken)
  } else {
    console.log('No registration token available. Request permission to generate one.');
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
});