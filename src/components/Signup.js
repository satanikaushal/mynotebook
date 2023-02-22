import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
const Signup = (props) => {
  const [ecreds, seteCreds] = useState({name:'',email:'',password:''});
let history = useNavigate();
    const handleeSubmit = async (e)=>{
      props.myProgress(10);
        e.preventDefault();
        const response = await fetch(`https://mernappbackend-g13h.onrender.com/api/auth/createuser`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name:ecreds.name,email:ecreds.email,password:ecreds.password})
        });
        const json = await response.json();
        console.log(json);
        if(json.success === true){
          props.myProgress(60);
            //redirect and save the authtoken
            props.showAlert("Account created Successfully","text-green-500 bg-white py-3 border-2 fixed top-15")
            history('/');
        }
        else{
            props.showAlert(json.error,"text-red-500 bg-white py-3 border-2 fixed top-15");
        }
        props.myProgress(100);
    }
    const oneChange = (e)=>{
      seteCreds({...ecreds,[e.target.name]:e.target.value})
    }
  return (
    <form onSubmit={handleeSubmit} className='mx-3 sm:mx-auto sm:w-[40%] my-10'>
        <fieldset className='border-2 p-3 rounded-lg'>
          <legend className='text-lg px-2 font-semibold'>Sign Up</legend>
          <label htmlFor='name'>Name</label><br/>
          <input id='name' name='name' type="text" value={ecreds.name} placeholder='Enter name' className='bg-[#f9faff] w-full border-2 rounded-lg p-1 my-3 focus:outline-[#73c0b4]' onChange={oneChange}/>
          <label htmlFor='Email'>Email</label><br/>
          <input id='Email' name='email' type="email" value={ecreds.email} placeholder='Enter email' className='bg-[#f9faff] w-full border-2 rounded-lg p-1 my-3 focus:outline-[#73c0b4]' onChange={oneChange}/>
          <label htmlFor='Password'>Password</label><br/>
          <input id='Password' name='password' type="password" value={ecreds.password} placeholder='Enter your password' className='w-full bg-[#f9faff] border-2 rounded-lg p-1 my-3 focus:outline-[#73c0b4]' onChange={oneChange}/>
          <button type='submit' className='w-[30%] block mx-auto mt-4 text-lg rounded-lg text-[#4e576b] bg-[#73c0b4]'>Signup</button>
          <p className='text-center pt-5'>Already have an account ? <span className='text-blue-500 hover:underline' onClick={()=>{history('/login')}}>Login</span></p>
        </fieldset>
      </form>
  )
}

export default Signup