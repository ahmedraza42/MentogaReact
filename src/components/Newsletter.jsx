import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-black px-4 bg-slate-300'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
          Fueling Growth and Positive Impact
          </h1>
          <p>Sign up to our Mentoga and stay up to date.</p>
        </div>
        <div className='my-4'>
          {/* <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Me
            </button>
          </div> */}
          <p>
          We envision a world where expertise, inspiration and empowerment are accessible to all, fueling growth and positive impact. Our mission is to provide personalized access to Experts and Superstars, empowering individuals globally to connect, learn and take action towards realizing their aspirations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;