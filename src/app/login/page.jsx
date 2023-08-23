import React, {useState} from 'react';
import { useRouter } from 'next/router';
import styles from './login.module.css';


function Login() {
  const router = useRouter();

const [values, setValues] = useState({
  username: '',
  password: ''
});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://orphanagehome.onrender.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      body: JSON.stringify(values),
      }
    })
  const data = await response.json();
  if(data.status === 200) router.push('/dashboard');
  }
  return (
    <div className={`flex center full-width ${styles.signin}`}>
      <h2>Login with Details</h2>
      <form className='flex flex-col center' onSubmit={handleSubmit}>
        <label>Username</label>
        <input onChange= {(e) => setValues({...values, username: e.target.value} )} type='text' name='password'/>
        <label>Password</label>
        <input onChange={(e)=> setValues({...values, password: e.target.value})} type='password' name='password'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login;