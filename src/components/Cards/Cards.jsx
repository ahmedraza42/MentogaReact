import React from 'react';
// import Single from '../assets/single.png'
// import Double from '../assets/double.png'
// import Triple from '../assets/triple.png'
import '../Cards/card.css';
import { useNavigate } from 'react-router';
const Cards = ({image,firstName,aboutMe,shorBio ,key,uniqueName}) => {
 const navigate =  useNavigate()
  const handleClick = () => {
    const userId = uniqueName;
    const userName = 'John Doe';
    
    // Navigate to DetailScreen with userId as route parameter
    // history.push(`/details/${userId}`, { userName });
    navigate(`/MentorDetails`,{state:{id:userId}})
  };
  return (
    <div  onClick={handleClick} className='cardRoot ' >
      <img className='card-image' src={image} alt={firstName}  />
    </div>



  );
};


export default Cards;



{/* <div  className=" w-72 h-[420px] px-2.5 py-[15px] bg-gradient-to-t from-black to-white rounded-xl flex-col justify-between items-end  inline-flex ml-3">
  <img className=' w-72 h-[420px] px-2.5 py-[15px] bg-gradient-to-t from-black to-white rounded-xl flex-col justify-between items-end  inline-flex' src={image}></img>
  <img src={image} width="100%" height="100%"/>
  <div className="self-stretch h-6 justify-between items-center gap-2.5 inline-flex position-absolute">
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
    <div className="self-stretch text-slate-200 text-[10px] font-bold">{shorBio?shorBio:aboutMe?.substring(0,44)}</div>
  </div>
</div> */}