import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';

import { onMessageListener, requestPermission } from './firebase'


function App() {

  const notify = () =>  toast(<ToastDisplay/>);

  const [show, setShow] = useState(false)
  const [notification, setNotification] = useState({ title: '', body: '' })
  const [isTokenFound, setTokenFound] = useState(false)
  const [getFcmToken, setFcmToken] = useState('')


  requestPermission(setTokenFound, setFcmToken)

  onMessageListener().then(payload => {
    console.log("payload")
    console.log(payload)
    setNotification({ title: payload.notification.title, body: payload.notification.body })
    setShow(true)
  }).catch((err) => {
    console.log("err:")
    console.log(err)
  })

  function ToastDisplay() {
    return (
      <div>
        <p><b>{notification?.title}</b></p>
        <p>{notification?.body}</p>
      </div>
    );
  };

  useEffect(() => {
    console.log("HI my useEffect")
    if (notification?.title ){
      console.log("Hi my conditional")
      notify()
    }
  }, [notification])
  
  return (
    <div style={{ width: "100vw", margin: "5rem" }}>
      {isTokenFound && <h1>Notificatoin Permission Enable</h1>}
      {isTokenFound && <h6>FCM TOKEN: {getFcmToken}</h6>}
      {!isTokenFound && <h1>Permission neeeded!</h1>}
      <Toaster />
    </div>
  );
}

export default App;
