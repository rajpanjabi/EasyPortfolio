// src/components/SignUp.js'
'use client';
import { useState } from 'react';
import '../styles/SignUp.scss';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth} from "@/app/firebase/config";

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const [
    createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try{
    const res= await createUserWithEmailAndPassword(username, password);
    console.log({res})
    setPassword('');
    setUsername('');
    }
    catch(err){
        console.error(err);
    }
  };

  return(<div className="signup-container">
            <h2 className="signup-title">Sign Up</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <label>Username</label>
                <input type="email" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" required></input>
                <label>Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required  />
                <button type="submit" className="signup-button">Sign Up</button>
            </form>
        </div>
);
};

export default SignUp;