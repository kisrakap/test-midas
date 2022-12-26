import React from 'react'
import { useState } from 'react';
import axios from 'axios'

export default function Loginpage() {

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    
    const login = () => {
        axios.post('https://reqres.in/api/login', {email: email, password: password})
        .then((resp) => {
          console.log(resp)
          if (resp.data.token) {
            // return home page 
          } else {
            alert("login lagi")
          }
        }).catch((err) => {
          alert("login lagi")
          console.log(err)
        })
    
      }
    return (
    <div className="App m-3 p-5">
      <div className='m-3 p-2 '>
        <div>
          Email
        </div>
        <input label="text" type="input" onChange={(e) => {
          setEmail(e.target.value)
        }}>
        </input>
      </div>

      <div className='m-3 p-2'>
        <div>Password</div>
        <input label="Password" type="password" onChange={(e) => {
          setPassword(e.target.value)
        }}>
        </input>
      </div>

      <button className='m-2' onClick={login}>Login</button>
    </div>
  )
}
