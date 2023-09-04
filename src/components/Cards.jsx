import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = ({image,firstName,aboutMe,shorBio ,key}) => {
  return (
    // <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
    //           <img className=' w-full h-40 mx-auto mt-[-3rem] bg-white' src={image} alt="/" />
    //           <h2 className=' text-2 font-bold text-center py-8'>{firstName.substring(0,10)}</h2>
    //           <p className='text-center text-4xl font-bold'>$149</p>
             
    //           <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
    //       </div>


<div style={{ "background-image": `url(${image})`,"background-size": 'cover' ,"background-repeat": "no-repeat"}} className=" w-72 h-[420px] px-2.5 py-[15px] bg-gradient-to-t from-black to-white rounded-xl flex-col justify-between items-end  inline-flex">
  {/* <img className=' w-72 h-[420px] px-2.5 py-[15px] bg-gradient-to-t from-black to-white rounded-xl flex-col justify-between items-end  inline-flex' src={image}></img> */}
  
  <div className="self-stretch h-6 justify-between items-center gap-2.5 inline-flex">
    <div className="p-1 bg-stone-500 bg-opacity-50 rounded-[10px] backdrop-blur-[10px] justify-start items-center gap-1 flex">
      <div className="w-3 h-3 relative"></div>
      <div className="opacity-70 text-white text-xs font-bold">4.3</div>
    </div>
    <div className="p-1.5 bg-stone-500 bg-opacity-50 rounded-[10px] backdrop-blur-[10px] justify-start items-center gap-1 flex">
      <div className="opacity-70 text-white text-xs font-bold">$459</div>
    </div>
  </div>
  <div className="self-stretch h-[31px] flex-col justify-center items-start gap-0.5 flex ">
    <div className="self-stretch justify-start items-center gap-0.5 inline-flex">
      <div className="text-white text-sm font-bold capitalize">{firstName}</div>
      <div className="w-3.5 h-3.5 relative">
        <div className="w-1.5 h-1.5 left-[4px] top-[4px] absolute"></div>
      </div>
    </div>
    <div className="self-stretch text-slate-200 text-[10px] font-bold">{shorBio?shorBio:aboutMe.substring(0,44)}</div>
  </div>
</div>
  );
};


export default Cards;