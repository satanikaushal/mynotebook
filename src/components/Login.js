import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
// import {useContext} from 'react';
// import noteContext from '../context/Notes/noteContext';

const Login = (props) => {
  // const context = useContext(noteContext);
  // const {fetchallnotes} = context;
const [creds, setCreds] = useState({name:'',email:'',password:''});
let history = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/login',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email:creds.email,password:creds.password})
        });
        const json = await response.json();
        if(json.success === true){
            //redirect and save the authtoken
            localStorage.setItem("token",json.authtoken);
            props.showAlert("Logged in successfully","text-green-500 bg-white py-3 border-2 fixed top-15")
            history('/');
        }
        else{
          props.showAlert(json.error,"text-red-500 bg-white py-3 border-2 fixed top-15");
        }
    }
    const onChange = (e)=>{
      setCreds({...creds,[e.target.name]:e.target.value})
    }

  return (
    <form onSubmit={handleSubmit} className='mx-3 sm:mx-auto sm:w-[40%] my-10'>
        <fieldset className='border-2 p-3 rounded-lg'>
          <legend className='text-lg px-2 font-semibold'>Login</legend>
          <label htmlFor='Email'>Email</label><br/>
          <input id='Email' name='email' type="email" value={creds.email} placeholder='Enter email' className='bg-[#f9faff] w-full border-2 rounded-lg p-1 my-3 focus:outline-[#73c0b4]' onChange={onChange}/>
          <label htmlFor='Password'>Password</label><br/>
          <input id='Password' name='password' type="password" value={creds.password} placeholder='Enter your password' className='w-full bg-[#f9faff] border-2 rounded-lg p-1 my-3 focus:outline-[#73c0b4]' onChange={onChange}/>
          <button type='submit' className='w-[30%] block mx-auto mt-4 text-lg rounded-lg text-[#4e576b] bg-[#73c0b4]'>Login </button>
          <p className='text-center pt-5'>Don't have an account ? <span className='text-blue-500 hover:underline' onClick={()=>{history('/signup')}}>Sign up</span></p>
        </fieldset>
      </form>
  )
}

export default Login