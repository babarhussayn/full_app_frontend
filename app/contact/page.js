"use client";
import { postData } from "@/api/services";
import Navbar from "@/components/Navbar";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });


  async function handleSubmit(e) {
    e.preventDefault();

    const sendValues = { ...formValue };
  setFormValue({email:'', phone:'', address:'', message:'',name:''})
    try {
      const response = await postData("contact/sendmessage", sendValues);

      if (response.status) {

        const user = {
          email: response.user?.email || "",
          address: response.user?.address || "",
          name: response.user?.name || "",
          phone:response.user?.phone || "",
          message:response.user?.message || ""
        };
        toast.success(response.message);
      return user;
      } else {
      toast.error(response.message);
      }
    } catch (error) {
      console.error(error);
    }
  
  }

  const handleChange = (e) => {
    e.preventDefault();

    const { value, name } = e.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
    console.log(value);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center  h-screen">
        <div className=" p-18 ">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col   gap-8">
              <div className="flex justify-between items-center">
                <TextField
                  name="name"
                  value={formValue.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />

                <div>
                  <TextField
                    name="email"
                    value={formValue.email}
                    onChange={handleChange}
                    placeholder="Email"
                    type="email"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-between items-center gap-6">
                <TextField
                  name="phone"
                  value={formValue.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  type="number"
                  required
                />

                <div>
                  <TextField
                    name="address"
                    value={formValue.address}
                    onChange={handleChange}
                    placeholder="Country"
                    type="text"
                    required
                  />
                </div>
              </div>
              <div>
                <TextField
                  name="message"
                  value={formValue.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  multiline
                  fullWidth
                />
              </div>
              <Button
                variant="contained"
                className="bg-[#f04f72]"
                type="submit"
              >
                Send
              </Button>
              <ToastContainer/>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
