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


export function requestPermission(setTokenFound, setFcmToken) {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      return getToken(messaging, { vapidKey: "BDd_4M1uYL0OoJw8xRpmeUhD88rAzRwngrr4xXkwSlyRW8J3nWiDPwb-jcv0FYhUNgzu8MNMcCvqwWpr00CnHCc" }).then((currentToken) => {
        if (currentToken) {
          setTokenFound(true)
          setFcmToken(currentToken)
        } else {
          console.log("No token found")
          setTokenFound(false)
          setFcmToken('')
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      })
    } else {
      console.log("Notification permission wasn't granted.")
    }
  }).catch((err) => {
    console.log("Notification permission error: ", err)
  })
}

// export const fetchToken = (setTokenFound, setFcmToken) => {
//   return getToken(messaging, { vapidKey: "BDd_4M1uYL0OoJw8xRpmeUhD88rAzRwngrr4xXkwSlyRW8J3nWiDPwb-jcv0FYhUNgzu8MNMcCvqwWpr00CnHCc" }).then((currentToken) => {
//     if (currentToken) {
//       setTokenFound(true)
//       setFcmToken(currentToken)
//     } else {
//       console.log("No token found")
//       setTokenFound(false)
//       setFcmToken('')
//     }
//   }).catch((err) => {
//     console.log('An error occurred while retrieving token. ', err);
//   })
// }

export const onMessageListener = () => 
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload)
    })
  })
