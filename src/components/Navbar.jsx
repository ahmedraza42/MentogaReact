import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import '../css/nav.css'
const Navbar = ({color='trans'}) => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Add event listener when component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Only run once on component mount

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div  className={scrolling?' color position-fixed w-100 top-0':color=='trans' ?'bg-transparent position-fixed w-100 top-0':'color position-fixed w-100 top-0'}>
<div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
<div className='navimg'>
<img width="100%" height="100%" src='https://res.cloudinary.com/dmdawjgs8/image/upload/v1706010391/new/Group_34232_3_jx3ap0.webp' />
</div>
      <div className='hidden md:flex'>
      <button  className='nav_btn' onClick={()=>{navigate('/Login')}} >Become a creator</button>
     <button  className='nav_btn' onClick={()=>{navigate('/Login')}} >About Us</button>
     <button  className='nav_btn' onClick={()=>{navigate('/Login')}} >Login</button>
      </div>
   
     
      {/* <ul className='hidden md:flex'>
        <button  className='nav_btn' onClick={()=>{navigate('/Login')}} >Login</button>
        <li className='p-4'>Register</li>
        <li className='p-4'>Cart</li>
        <li className='p-4'>About</li>
      </ul> */}
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#2F64ED] m-4'>Mentoga.</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Chat</li>
          <li className='p-4 border-b border-gray-600'>E-meetings</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
    </div>
    
  );
};

export default Navbar;