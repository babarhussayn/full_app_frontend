'use client'
import Navbar from '@/components/Navbar';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';


const Cart=()=>{
const store = useSelector((state)=> state.cart)
    return (
    
    <>
    <Navbar/>
    <div className='flex justify-center items-center'>
        <div className='min-h-screen '>
            <h2>Your cart </h2>
               {store?.length > 0 ?(
                <div>
                      <div className="flex flex-col gap-6">
              {store.cart?.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b py-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16"
                    />
                    <div>
                      <h3 className="text-lg">{item.name}</h3>
                      <p>
                        £{item.price} x {item.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-3">
                      <button
                        className="bg-red-500 font-bold p-1 w-6 h-6 flex justify-center items-center rounded-full"
                        // onClick={() => dispatch(decreaseQuantity(item.id))}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="bg-green-500 font-bold p-1 w-6 h-6 flex justify-center items-center rounded-full"
                        // onClick={() => dispatch(increaseQuantity(item.id))}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="bg-red-500 p-2 w-6 h-6 flex justify-center items-center rounded-full"
                    //   onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      x
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-between items-center mt-6">
                <h2 className="text-2xl">
                  Total: £{store.cartTotal.toFixed(2)}
                </h2>
                <button
                  className="bg-primary text-white p-2 rounded-md hover:bg-transparent border-2 border-primary hover:text-primary hover:border-2 hover:border-primary"
                //   onClick={() => router.push("/checkout")}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
                </div>
               ):(<span>
                your cart is empty
               </span>)}
        </div>

    </div>
    </>
    )
};
export default Cart;