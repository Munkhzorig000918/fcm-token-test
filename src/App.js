import React, { useState } from 'react'
import axios from 'axios'
import Notification from './Notification'

function App() {

  const [file, setFile] = useState(null)

  function fileUpload(event) {
    setFile(event.target.files[0])
  }

  function createProject() {
    let data = new FormData()
    data.append('name', 'Air condition system');
    data.append('description', 'Air condition system is saving energy resource');
    data.append('clientId', '1');
    data.append('file', file, file.name);
    data.append('projectTypeId', '1');

    var config = {
      method: 'post',
      url: 'http://localhost:5005/projects/proposal/create-project',
      headers: { 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJyb2xlSWQiOjJ9LCJpYXQiOjE2NjM2OTI5MjksImV4cCI6MTY2MzY5NjUyOX0.PlxeYnjLZJdisLBs1EFSpVpgnUfT54SRGkIUzVK5H1Y', 
        'Content-Type': "multipart/form-data; boundary=<calculated when request is sent>"
      },
      data : data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  return (
    <div style={{ width: "100vw", margin: "5rem" }}>
      <h1>Create project</h1>
      <br />
      <Notification />
      <br />
      <br />
      <p>file upload here</p>
      <input onChange={fileUpload} type="file" />
      <br />
      <br />
      <p>Create project now</p>
      <button onClick={createProject}>click me</button>
    </div>
  );
}

export default App;
