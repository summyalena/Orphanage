'use client';

import React, {useState} from 'react';
import { useRouter } from 'next/navigation';
import styles from './signup.module.css';


function Signup() {
  const router = useRouter();

const [values, setValues] = useState({
  username: '',
  password: ''
});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://orphanagehome.onrender.com/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      body: JSON.stringify(values),
      }
    })
  const data = await response.json();
  if(data.status === 200) router.push('/login');
  }
  return (
    <div className={`flex flex-col center full-width ${styles.signup}`}>
      <h2>Orphanage Home</h2>
      <form className='flex flex-col gap-sm center' onSubmit={handleSubmit}>
        <label>Username</label>
        <input onChange= {(e) => setValues({...values, username: e.target.value} )} type='text' name='password'/>
        <label>Password</label>
        <input onChange={(e)=> setValues({...values, password: e.target.value})} type='password' name='password'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Signup;