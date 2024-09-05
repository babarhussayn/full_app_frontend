'use client'

import Link from 'next/link';
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';


const navbar=[
    {
      name:'Home',
      link:'/',
},
{
    name:'Contact',
    link:'/contact',
},
{
    name:'Products',
    link:'/products',
},
{
    name:'About',
    link:'/about',
},

]

const Navbar=()=>{
    const router= useRouter()
return(

<>

<div className='bg-[#f04f72]'>
    <div className='flex justify-between items-center p-6 '>
        {navbar.map((item,index)=>(
            <p key={index} >
                <Link href={item.link}>{item.name}</Link> 
            </p>
            ))}

<p   onClick={()=>router.push('/cart')} className='cursor-pointer'>
<ShoppingCartIcon className='text-white' fontSize='large' />
</p>

            
    </div>
</div>

</>
)
}
export default Navbar;