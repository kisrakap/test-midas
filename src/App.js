import React from 'react'
import './App.css';
// import { useState } from 'react';
// import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Loginpage from './Login';
import Homepage from './Homepage'

function App() {
  // let [email, setEmail] = useState('')
  // let [password, setPassword] = useState('')

  // "email": "eve.holt@reqres.in",
// "password": "cityslicka"
  // const login = () => {
  //   axios.post('https://reqres.in/api/login', {email: email, password: password})
  //   .then((resp) => {
  //     console.log(resp)
  //     if (resp.data.token) {
  //       // return home page 
  //     } else {
  //       alert("login lagi")
  //     }
  //   }).catch((err) => {
  //     alert("login lagi")
  //     console.log(err)
  //   })
  // }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Loginpage/>}></Route>
        <Route path="/homepage" element={ <Homepage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
