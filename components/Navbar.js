import Link from 'next/link';
import React from 'react'
 


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
return(

<>

<div className='bg-[#f04f72]'>
    <div className='flex justify-between items-center p-6 '>
        {navbar.map((item,index)=>(
            <p key={index} >
                <Link href={item.link}>{item.name}</Link> 
            </p>
            ))}
    </div>
</div>

</>
)
}
export default Navbar;