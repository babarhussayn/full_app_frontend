import Cards from '@/components/Cards';
import Navbar from '@/components/Navbar';
import React from 'react'




const data=[
    {
        image:'/assets/images/lap-1.jpg',
        title:'Hp Laptop Core i5 6th generation',
        price:200,
    },
    {
        image:'/assets/images/lap-2.jpg',
        title:'Hp Laptop Core i5 6th generation',
        price:200,
    },
    {
        image:'/assets/images/lap-1.jpg',
        title:'Hp Laptop Core i5 6th generation',
        price:200,
    },
    {
        image:'/assets/images/lap-2.jpg',
        title:'Hp Laptop Core i5 6th generation',
        price:200,
    },
    {
        image:'/assets/images/lap-1.jpg',
        title:'Hp Laptop Core i5 6th generation',
        price:200,
    },
    {
        image:'/assets/images/lap-2.jpg',
        title:'Hp Laptop Core i5 6th generation',
        price:200,
    },
    {
        image:'/assets/images/lap-1.jpg',
        title:'Hp Laptop Core i5 6th generation',
        price:200,
    },
    {
        image:'/assets/images/lap-2.jpg',
        title:'Hp Laptop Core i5 6th generation',
        price:500,
    },
];










const Products=()=>{

    return(
    
    <>
    <Navbar/>
<div className=' w-full p-24'>
         <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-14'>
<Cards data={data}/>
</div>

</div>

    </>
    )
};
export default Products;