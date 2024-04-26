import React from 'react';
import Laptop from '../assets/laptop.jpg';
import { Col, Row } from 'react-bootstrap';



const Analytics = () => {

  return(
    <div className='w-full py-[5rem] px-2 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
      
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-4 hover:scale-105 duration-300 '>
              <img className='w-20 mx-auto mt-[-3rem] bg-white ' src="https://res.cloudinary.com/dn2x9xpxm/image/upload/v1687877945/Group_3659_bbcnxv.svg" alt="/" />

             
              <h5 className='text-center text-2xl font-bold mt-2'>Book 1-1 eMeeting</h5>
              <div className='text-center font-medium'>
              <p className="card-text gilroy-m text-muted fs-6 lh-lg">
                 {" "}
                 Get exclusive access to your favourite creator's expertise, advice, and consultation via personalized online meetings. 
              </p>
              </div>
              {/* <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button> */}
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-4 hover:scale-105 duration-300 '>
              <img className='w-20 mx-auto mt-[-3rem] bg-white ' src="https://res.cloudinary.com/dn2x9xpxm/image/upload/v1687877945/Group_3659_bbcnxv.svg" alt="/" />

             
              <h5 className='text-center text-2xl font-bold mt-2'>Chat 1-1</h5>
              <div className='text-center font-medium'>
              <p className="card-text gilroy-m text-muted fs-6 lh-lg">
                 {" "}
                 Engage in private, meaningful conversations with your creators through text, voice, or video chat, fostering a closer bond.  
              </p>
              </div>
              {/* <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button> */}
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-4 hover:scale-105 duration-300 '>
              <img className='w-20 mx-auto mt-[-3rem] bg-white ' src="https://res.cloudinary.com/dn2x9xpxm/image/upload/v1687877945/Group_3659_bbcnxv.svg" alt="/" />

             
              <h5 className='text-center text-2xl font-bold mt-2'>Show Appreciation</h5>
              <div className='text-center font-medium'>
              <p className="card-text gilroy-m text-muted fs-6 lh-lg">
                 {" "}
                 Express your admiration and support for your favourite creators by contributing towards their work by buying them a coffee. 
              </p>
              </div>
              {/* <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button> */}
          </div>
      </div>
    </div>
  )

};

export default Analytics;