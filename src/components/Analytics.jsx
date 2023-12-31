import React from 'react';
import Laptop from '../assets/laptop.jpg';
import { Col, Row } from 'react-bootstrap';



const Analytics = () => {

  return(
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
      
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src="https://res.cloudinary.com/dn2x9xpxm/image/upload/v1687877945/Group_3659_bbcnxv.svg" alt="/" />

             
              <h5 className='text-center text-4xl font-bold'>Find</h5>
              <div className='text-center font-medium'>
              <p className="card-text gilroy-m text-muted fs-6 lh-lg">
                 {" "}
                 Discover and choose from our list of world's most in-demand
                 Experts and Superstars{" "}
              </p>
              </div>
              {/* <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button> */}
          </div>
                    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src="https://res.cloudinary.com/dn2x9xpxm/image/upload/v1687877945/Group_3659_bbcnxv.svg" alt="/" />
              
             
              <h5 className='text-center text-4xl font-bold'>Book</h5>
              <div className='text-center font-medium'>
              <p className="card-text gilroy-m text-muted fs-6 lh-lg">
                 {" "}
                 Select a time that works both you and your Expert's schedule
              </p>
              </div>
              {/* <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button> */}
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src="https://res.cloudinary.com/dn2x9xpxm/image/upload/v1687877945/Group_3659_bbcnxv.svg" alt="/" />
              
             
              <h5 className='text-center text-4xl font-bold'>Consult</h5>
              <div className='text-center font-medium'>
              <p className="card-text gilroy-m text-muted fs-6 lh-lg">
                 
                 Join the 1-on-1 video call, ask question, and get expert advice


              </p>
              </div>
              {/* <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button> */}
          </div>
      </div>
    </div>
  )

};

export default Analytics;