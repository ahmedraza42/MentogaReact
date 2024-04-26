
import React from 'react'
import '../Categories/category.css'
const Category = ({ image, name }) => {
  return (
    <div className="category">
    <div className='categorydiv'>
    <img src={image} alt={name} />
    </div>
   
      <p>{name}</p>
    </div>
  );
};

const Categories=({categories=[]})=> {

  const Categoriess = (categories) => {
    console.log({categories})
    return (
      <div className="horizontal-scroll-container ">
        <div className="categories-container">
        {categories.map((category, index) => (
          <Category key={index} image={category.imagePath} name={category.name} />
        ))}
      </div>
      </div>
     
    );
  };
 
  return (
    <div className='max-w-[1240px] mx-auto   bg-[#ffff] container'>
 <h1>Categories</h1>
     {Categoriess(categories)}
    </div>
   

   
  )
}

export default Categories