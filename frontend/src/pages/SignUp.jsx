import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios'
const SignUp = () => {

  const navigate = useNavigate();
  const [formData,setFormData] = useState("");
  const [error,setError] = useState("");
  const [loading,setLoading] = useState(false);
  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }
  const handleSubmit = (e)=>{
      e.preventDefault();
      setLoading(true);
      axios.post('http://localhost:5000/auth/signup',formData)
      .then(res=>{
        console.log(res)
        if(res.success === false){
          setError(res.message);
          setLoading(false);
          return;
        }
        setLoading(false);
        navigate('/sing-in');
      })
      .catch(err=>{
        setLoading(false);
        setError(err.message);
        console.log(err);
      })
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type='text' placeholder='Username' className='border p-3 rounded-lg' id='username' onChange={handleChange}/>
        <input type='email' placeholder='Email' className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
        <input type='password' placeholder='Password' className='border p-3 rounded-lg' id='password' onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading? 'Loading..':'Sign Up'}</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an accound?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-700'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp