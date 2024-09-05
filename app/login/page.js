'use client'

import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { postData } from "@/api/services";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '@/components/Navbar';
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/store';
import { useRouter } from 'next/navigation';

const Login = () => {

  const router=useRouter()
  const dispatch=useDispatch()

  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    const currentData = { ...formData };

    
    setFormData({ email: '', password: '' });

    try {
      const response = await postData('user/login', currentData);

      if (response.status) {
        
        const user = {
          name:response.user.name,
          email: response.user.email,
          id: response.user._id,
        };
        dispatch(setUser(user))
        toast.success(response.message);
        router.push('/')
        return user;
        
      } else {

      toast.error(response.message,"Login failed");
    
      }
    } catch (error) {
      console.error(error);
    
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
<>
    <Navbar/>
    <div className="m-2">
      <form onSubmit={handleSubmit}>
        <div className="m-2">
          <TextField
            label="Email"
            variant="standard"
            value={formData.email}
            name="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="m-2">
          <TextField
            label="Password"
            variant="standard"
            value={formData.password}
            name="password"
            onChange={handleChange}
            type='password'
            required
          />
        </div>
        <div className="mt-6">
          <Button variant="contained" type="submit">Login</Button>
          <ToastContainer />
        </div>
      </form>
    </div>
    </> );
};

export default Login;
