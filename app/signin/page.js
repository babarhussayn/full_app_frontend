"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";

import Navbar from "@/components/Navbar";
import { Button } from "@mui/material";
import { postData } from "@/api/services";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
const SignIn = () => {

const router=useRouter()

  const [formValues, setFormValues] = useState({
    name: "",
    password: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const currentData = { ...formValues };

    setFormValues({ email: "", password: "" ,name:""});

    try {
      const response = await postData("user/register", currentData);

      if (response.status) {
        const user = {
          email: response.user?.email || "",
          password: response.user?.password || "",
          name: response.user?.name || "",
        };
        toast.success("signin successful",response.message);
        return user;
      } else {
        toast.error(response.message,response.status);
      }
    } catch (error) {
      console.error(error);
    }
    // router.push('/')
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <>
      <Navbar />
      <div
      
      >
        <div className="flex justify-between items-center ">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-8 ">
              <div>
                <TextField
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <TextField
                  name="email"
                  value={formValues.email}
                  type="email"
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <TextField
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
              </div>
              <Button type="submit" variant="contained">
                SignIn
              </Button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
