import React, { useRef, useState} from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';

export default function App() {
  // This config is for component Register
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(null);

  const registerNewUser = async (newUser) => {
    try {
        const endpoint = "http://192.168.20.7:5000/register";

        const response = await axios.post(endpoint, newUser, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        console.log("Response:", response); // Log the entire response object
        if (response.status) {
          showAlert("success", "Congratulations! You've been registered with us.")
        } 
  } 
  
  catch (error) {
    if (error.response.status === 400) {
      showAlert("warning", `username ${username} is already taken. Please try again with another username.`)
    } else if (error.request) {
      showAlert("danger", "An error occured.")
    } else {
      showAlert("danger", "An error occured.")
    }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    setUsername(username);
    setPassword(password);

    usernameRef.current.value = null;
    passwordRef.current.value = null;

    const newUser = {username: username, password: password};

    registerNewUser(newUser);
  };

  const showAlert = (type, message) => {
    setAlert({type: type, message: message});
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='login' element={<Login/>}/>

        <Route path='register' 
        element={<Register 
        usernameRef={usernameRef}
        passwordRef={passwordRef}
        handleSubmit={handleSubmit}
        setAlert={setAlert}
        alert={alert}/>}/>

      </Routes>
    </div>
  );
}


