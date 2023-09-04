import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=' bg-black'>
<div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#2F64ED]'>Mentoga</h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div >
        <h6 className='font-medium text-gray-400 text-center'>Explore</h6>
        
        {/* <ul> */}
            <li onClick={()=>{console.log('ddss')}} className='py-2 text-sm'>Home</li>
            <li className='py-2 text-sm'>Expert</li>
            <li className='py-2 text-sm'>About Us</li>
            <li className='py-2 text-sm'>Contact Us</li>
        {/* </ul> */}
    </div>
    <div>
    <h6 className='font-medium text-gray-400 '>Links</h6>
    <li onClick={()=>{console.log('ddss')}} className='py-2 text-sm'>Home</li>
            <li className='py-2 text-sm'>Expert</li>
            <li className='py-2 text-sm'>About Us</li>
            <li className='py-2 text-sm'>Contact Us</li>
    </div>
    <div>
        <h6 className='font-medium text-gray-400 text-center'>Company</h6>
        <li onClick={()=>{console.log('ddss')}} className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
    </div>
    <div>
        <h6 className='font-medium text-gray-400 text-center'>Legal</h6>
        <li onClick={()=>{console.log('ddss')}} className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
    </div>
      </div>
    </div>
    </div>
    
  );
};

export default Footer;