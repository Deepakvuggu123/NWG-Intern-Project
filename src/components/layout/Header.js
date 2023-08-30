import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/Image';
import{BsCart4} from 'react-icons/bs';
import { getCartItems } from '@/styles/utils/cartitems';

function Header() {

  const [cart,setCart] = useState(0);
  useEffect(() => {
    setInterval(() =>{
      const cartItems = getCartItems();
      setCart(cartItems.length)
    },1000)
  },[])
  return (
    <>
    <nav className="navbar navbar-top-bg text-white d-none d-md-block">
  <div className="container-md">
    <i className='nav-item navbar-nav'>The biggest sale of the year is here - Shop till you drop - Biggest deals of the year Black Friday 2023 - It’s a busy day for our cart</i>
    <div className='dropdown.p-0'>
      <span className='dropdown-toogle' type="button" data-bs-toggle="dropdown" aria-expanded="False">My Account</span>
      <ul className='dropdown-menu'>
        <li>
          <Link  className="dropdown-item" href="#">Register</Link></li>

        <li>
          <Link  className="dropdown-item"href="#">Login</Link></li>
      </ul>
    
   
    </div>
    </div>
  
</nav>

<nav className="navbar navbar-bg text-white">
  <div className="container-md">
    <Link href="/" className='navbar-brand'>
      <Image src="/Images/040cdba08a12f8b8f6e313494502770e.jpg" width={190} height={40} alt="E-commerce logo"/>
    </Link>
    <Link href="/cart" className='nav-item nav-link d-flex gap-2 mr-20px align-items-center text-white'>
      <span className='p-1 rounded-circle bg-primary'>
        <BsCart4 size={21} className='pb-1'/>
       </span>
       {cart} items    
    </Link>
     </div>
  
</nav>
<nav class="navbar navbar-expand-lg shadow-sm mb-2 rounded container px-2">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
       <div class="navbar-nav">
          <Link href="/" className='nav-item nav-link active'>Store</Link>
          <Link href="/" className='nav-item nav-link active'>About US</Link>
          <Link href="/" className='nav-item nav-link active'>Support</Link>
         
          
    </div>
    </div>
  
</nav>


      
    </>
  )
}

export default Header
