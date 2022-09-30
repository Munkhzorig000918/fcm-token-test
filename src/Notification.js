import React, {useState, useEffect} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { getForToken } from '../firebase';

const Notification = () => {
  const [notification, setNotification] = useState({title: '', body: ''});
  const notify = () =>  toast(<ToastDisplay/>);
  function ToastDisplay() {
    return (
      <div>
        <p><b>{notification?.title}</b></p>
        <p>{notification?.body}</p>
      </div>
    );
  };

  useEffect(() => {
      console.log("object")
    if (notification?.title ){
     notify()
    }
  }, [notification])

  getForToken();

  // onMessageListener()
  //   .then((payload) => {
  //       console.log("payload")
  //       console.log(payload)
  //     setNotification({title: payload?.notification?.title, body: payload?.notification?.body});     
  //   })
  //   .catch((err) => console.log('failed: ', err));

  return (
      <div>
          <p>Notification</p>
          <Toaster/>
      </div>
  )
}

export default Notification