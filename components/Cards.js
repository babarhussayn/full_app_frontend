'use client'
import Image from "next/image";
import React from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/store"; // Ensure you import the correct action
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Cards = ({ data }) => {
  const dispatch = useDispatch();

  const addItemToCart = ({ id, name, price, quantity, image }) => {
    const cartItem = {
      id,
      name,
      price,
      quantity,
      image
    };
    dispatch(addToCart(cartItem));
  };

  return (
    <>
      {data.map((items, index) => (
        <div key={index} className="flex flex-col border">
          <Image src={items.image} width={500} height={250} alt={items.title || 'Item Image'} />

          <div>
            <p>{items.title || ''}</p>
            <span>price: {items.price}</span>
          </div>
          <Button 
            variant="contained" 
          
            sx={{backgroundColor:'#f04f72'}}
            onClick={() =>{ addItemToCart({
              id: items.title.toLowerCase() + "-" + index,
              name: items.title,
              price: items.price,
              quantity: 1,
              image: items.image,
            })
            toast.success(" added to cart")
             }}
          >
            Buy Now
          </Button>
          <ToastContainer/>
        </div>
      ))}
    </>
  );
};

export default Cards;
